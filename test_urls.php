<?php
$urls = [
    'http://smaran-raut.local/',
    'http://smaran-raut.local/about/',
    'http://smaran-raut.local/wholesale-cosmetics/',
    'http://smaran-raut.local/wholesale-cosmetics/product-range/',
    'http://smaran-raut.local/wholesale-cosmetics/koshi-province/',
    'http://smaran-raut.local/retail-cosmetics/'
];
foreach ($urls as $url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_NOBODY, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo $url . ' => ' . $code . PHP_EOL;
    curl_close($ch);
}
