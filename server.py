"""
Dual-Stack IPv6/IPv4 Development Server for Baba Cosmetics
Location: Janta galli, Itahari-6, Sunsari, Nepal

Binds using dual-stack IPv6/IPv4 (socket.AF_INET6 with IPV6_V6ONLY = 0)
to eliminate the 2.0-second socket reverse-DNS latency standard on Windows localhost.
Injects Cache-Control: no-store, no-cache, must-revalidate headers.
"""

import os
import sys
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class DualStackNoCacheHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Prevent browser caching lockouts during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        # Resolve clean URLs to /{path}/index.html
        path = self.path.split('?')[0].split('#')[0]
        local_path = os.path.join(DIRECTORY, path.lstrip('/'))

        if os.path.isdir(local_path):
            index_file = os.path.join(local_path, 'index.html')
            if os.path.exists(index_file):
                # Standard directory request
                return super().do_GET()
        elif not os.path.exists(local_path) and not '.' in os.path.basename(path):
            # Attempt to resolve directory index
            candidate_index = os.path.join(local_path, 'index.html')
            if os.path.exists(candidate_index):
                self.path = path.rstrip('/') + '/index.html'

        return super().do_GET()

class DualStackServer(HTTPServer):
    address_family = socket.AF_INET6

    def server_bind(self):
        # IPV6_V6ONLY = 0 enables dual-stack IPv6 & IPv4 on the same socket
        try:
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        except (AttributeError, OSError) as e:
            print(f"Notice: IPV6_V6ONLY could not be modified: {e}")
        super().server_bind()

def run():
    os.chdir(DIRECTORY)
    server_address = ('::', PORT)
    try:
        httpd = DualStackServer(server_address, DualStackNoCacheHandler)
        print(f"Baba Cosmetics Dual-Stack Server listening at http://localhost:{PORT}")
        print(f"Document Root: {DIRECTORY}")
        print(f"Dual-Stack: IPv6/IPv4 active (socket.AF_INET6 with IPV6_V6ONLY=0)")
        print(f"Headers: Cache-Control: no-store, no-cache, must-revalidate")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()

if __name__ == '__main__':
    run()
