/**
 * BABA COSMETICS - Interactive Commercial Utility & Centerpiece Calculators
 * Location: Janta galli, Itahari-6, Sunsari, Koshi Province, Nepal
 * All calculators feature isolated error handling, reactive input listeners,
 * formatted NPR currency output, and dynamic real-time status badges.
 */

const BabaCalculators = {
  // Format NPR Currency
  formatNPR: function(amount) {
    try {
      const num = Number(amount) || 0;
      return 'NPR ' + num.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    } catch (e) {
      console.error('formatNPR error:', e);
      return 'NPR 0.00';
    }
  },

  // 1. Wholesale Profit Margin & Markup Calculator
  initWholesaleMarginCalc: function() {
    try {
      const container = document.getElementById('calc-wholesale-margin');
      if (!container) return;

      const costInput = container.querySelector('#wm-cost');
      const retailInput = container.querySelector('#wm-retail');
      const qtyInput = container.querySelector('#wm-qty');
      const shippingInput = container.querySelector('#wm-shipping');
      const vatSelect = container.querySelector('#wm-vat');

      const grossMarginEl = container.querySelector('#wm-gross-margin');
      const netProfitEl = container.querySelector('#wm-net-profit');
      const totalProfitEl = container.querySelector('#wm-total-profit');
      const markupEl = container.querySelector('#wm-markup');
      const badgeEl = container.querySelector('#wm-badge');
      const adviceEl = container.querySelector('#wm-advice');

      const calculate = () => {
        try {
          const cost = parseFloat(costInput.value) || 0;
          const retail = parseFloat(retailInput.value) || 0;
          const qty = parseInt(qtyInput.value) || 1;
          const shipping = parseFloat(shippingInput?.value || 0) || 0;
          const vatMode = vatSelect?.value || 'inclusive';

          if (cost <= 0 || retail <= 0) {
            grossMarginEl.textContent = '0.0%';
            netProfitEl.textContent = 'NPR 0.00';
            totalProfitEl.textContent = 'NPR 0.00';
            markupEl.textContent = '0.0%';
            badgeEl.className = 'calc-badge badge-neutral';
            badgeEl.textContent = 'Awaiting Inputs';
            adviceEl.textContent = 'Enter your wholesale purchase unit cost and anticipated retail price to model profit viability.';
            return;
          }

          // Effective unit retail after VAT consideration
          let effectiveRetail = retail;
          if (vatMode === 'exclusive') {
            // Price exclusive of 13% VAT (customer pays 13% on top)
            effectiveRetail = retail;
          } else {
            // Retail price includes 13% VAT
            effectiveRetail = retail / 1.13;
          }

          const totalUnitCost = cost + shipping;
          const unitProfit = effectiveRetail - totalUnitCost;
          const grossMargin = ((effectiveRetail - totalUnitCost) / effectiveRetail) * 100;
          const markup = ((effectiveRetail - totalUnitCost) / totalUnitCost) * 100;
          const totalProfit = unitProfit * qty;

          grossMarginEl.textContent = grossMargin.toFixed(1) + '%';
          markupEl.textContent = markup.toFixed(1) + '%';
          netProfitEl.textContent = BabaCalculators.formatNPR(unitProfit);
          totalProfitEl.textContent = BabaCalculators.formatNPR(totalProfit);

          if (grossMargin >= 40) {
            badgeEl.className = 'calc-badge badge-success';
            badgeEl.textContent = 'High Profit Margin (Tier 1)';
            adviceEl.innerHTML = `<strong>Outstanding Commercial Margin:</strong> At <strong>${grossMargin.toFixed(1)}% margin</strong>, this product allows room for festive retail promotions, loyalty discounts, and sub-distributor commissions in Eastern Nepal. Recommended for prime shelf positioning.`;
          } else if (grossMargin >= 22) {
            badgeEl.className = 'calc-badge badge-info';
            badgeEl.textContent = 'Healthy Standard Margin';
            adviceEl.innerHTML = `<strong>Sustainable Retail Margin:</strong> At <strong>${grossMargin.toFixed(1)}% margin</strong>, this aligns with fast-moving skincare and daily hair cosmetics across Koshi Province. Sustainable for steady cash flow with standard 15-day inventory turns.`;
          } else if (grossMargin > 0) {
            badgeEl.className = 'calc-badge badge-warning';
            badgeEl.textContent = 'Thin Margin — High Velocity Required';
            adviceEl.innerHTML = `<strong>Volume-Driven Margin:</strong> At <strong>${grossMargin.toFixed(1)}% margin</strong>, this margin requires rapid stock turnover (within 7–10 days). Contact Baba Cosmetics wholesale desk to request tiered carton-rate discounts to expand your spread.`;
          } else {
            badgeEl.className = 'calc-badge badge-danger';
            badgeEl.textContent = 'Negative Margin / Deficit Alert';
            adviceEl.innerHTML = `<strong>Caution:</strong> The current retail price does not cover wholesale cost and logistics. Adjust retail pricing or consolidate shipment orders to reduce per-unit freight.`;
          }
        } catch (err) {
          console.error('Wholesale calc error inside calculation:', err);
        }
      };

      [costInput, retailInput, qtyInput, shippingInput, vatSelect].forEach(input => {
        if (input) {
          input.addEventListener('input', calculate);
          input.addEventListener('change', calculate);
        }
      });

      calculate();
    } catch (e) {
      console.error('initWholesaleMarginCalc failed:', e);
    }
  },

  // 2. Retail Inventory Turnover & Restock Modeler
  initInventoryRestockCalc: function() {
    try {
      const container = document.getElementById('calc-inventory-restock');
      if (!container) return;

      const onHandInput = container.querySelector('#ir-onhand');
      const salesInput = container.querySelector('#ir-sales');
      const leadTimeInput = container.querySelector('#ir-leadtime');
      const safetyInput = container.querySelector('#ir-safety');

      const daysRemainingEl = container.querySelector('#ir-days');
      const reorderPointEl = container.querySelector('#ir-rop');
      const suggestedQtyEl = container.querySelector('#ir-reorder-qty');
      const badgeEl = container.querySelector('#ir-badge');
      const adviceEl = container.querySelector('#ir-advice');

      const calculate = () => {
        try {
          const onHand = parseInt(onHandInput.value) || 0;
          const monthlySales = parseInt(salesInput.value) || 0;
          const leadTimeDays = parseInt(leadTimeInput.value) || 3;
          const safetyBufferDays = parseInt(safetyInput.value) || 7;

          if (monthlySales <= 0) {
            daysRemainingEl.textContent = '—';
            reorderPointEl.textContent = '0 units';
            suggestedQtyEl.textContent = '0 units';
            badgeEl.className = 'calc-badge badge-neutral';
            badgeEl.textContent = 'Enter Sales Velocity';
            adviceEl.textContent = 'Enter your monthly sales volume to compute replenishment thresholds.';
            return;
          }

          const dailyDemand = monthlySales / 30;
          const daysRemaining = Math.round(onHand / dailyDemand);
          const leadTimeDemand = dailyDemand * leadTimeDays;
          const safetyStock = dailyDemand * safetyBufferDays;
          const reorderPoint = Math.ceil(leadTimeDemand + safetyStock);
          const suggestedReorder = Math.ceil(monthlySales * 1.2); // 1.2 months target buffer

          daysRemainingEl.textContent = `${daysRemaining} Days`;
          reorderPointEl.textContent = `${reorderPoint} units`;
          suggestedQtyEl.textContent = `${suggestedReorder} units`;

          if (onHand <= leadTimeDemand) {
            badgeEl.className = 'calc-badge badge-danger';
            badgeEl.textContent = 'CRITICAL STOCK-OUT RISK';
            adviceEl.innerHTML = `<strong>Immediate Replenishment Required:</strong> You have only <strong>${daysRemaining} days</strong> of inventory left. With a ${leadTimeDays}-day delivery transit to your location in Sunsari/Morang, stockout will occur before reorder arrival. Place a rapid pickup or dispatch order with Baba Cosmetics today.`;
          } else if (onHand <= reorderPoint) {
            badgeEl.className = 'calc-badge badge-warning';
            badgeEl.textContent = 'REORDER THRESHOLD REACHED';
            adviceEl.innerHTML = `<strong>Reorder Point Triggered:</strong> Current stock has dropped below your safe threshold of <strong>${reorderPoint} units</strong>. Submit an order for <strong>${suggestedReorder} units</strong> to preserve uninterrupted retail sales and avoid client loss.`;
          } else if (daysRemaining > 75) {
            badgeEl.className = 'calc-badge badge-info';
            badgeEl.textContent = 'HIGH INVENTORY / SLOW TURNOVER';
            adviceEl.innerHTML = `<strong>Potential Dead Stock Warning:</strong> You have <strong>${daysRemaining} days</strong> of stock on hand. Cosmetic formulas carry shelf-life limits (PAO). Avoid placing additional reorders until current batches turn over, or bundle with faster-moving items.`;
          } else {
            badgeEl.className = 'calc-badge badge-success';
            badgeEl.textContent = 'OPTIMAL INVENTORY BALANCE';
            adviceEl.innerHTML = `<strong>Balanced Stock Position:</strong> Your current inventory gives you <strong>${daysRemaining} days</strong> of buffer. This maintains fresh product rotation, protects cash liquidity, and safeguards against batch obsolescence.`;
          }
        } catch (err) {
          console.error('Inventory calc error:', err);
        }
      };

      [onHandInput, salesInput, leadTimeInput, safetyInput].forEach(input => {
        if (input) {
          input.addEventListener('input', calculate);
          input.addEventListener('change', calculate);
        }
      });

      calculate();
    } catch (e) {
      console.error('initInventoryRestockCalc failed:', e);
    }
  },

  // 3. Cosmetic Batch Code & Shelf-Life Expiry Scanner
  initBatchExpiryCalc: function() {
    try {
      const container = document.getElementById('calc-batch-expiry');
      if (!container) return;

      const categorySelect = container.querySelector('#be-category');
      const mfgInput = container.querySelector('#be-mfg');
      const paoSelect = container.querySelector('#be-pao');
      const openedSelect = container.querySelector('#be-opened');
      const openedMonthsInput = container.querySelector('#be-opened-months');
      const openedMonthsGroup = container.querySelector('#be-opened-group');

      const statusBadgeEl = container.querySelector('#be-badge');
      const shelfDaysEl = container.querySelector('#be-remaining-days');
      const expiryDateEl = container.querySelector('#be-expiry-date');
      const protocolEl = container.querySelector('#be-protocol');

      const toggleOpenedMonths = () => {
        if (openedSelect && openedMonthsGroup) {
          openedMonthsGroup.style.display = openedSelect.value === 'yes' ? 'block' : 'none';
        }
      };

      const calculate = () => {
        try {
          const category = categorySelect?.value || 'skincare';
          const mfgDateVal = mfgInput?.value;
          const paoMonths = parseInt(paoSelect?.value) || 12;
          const isOpened = openedSelect?.value === 'yes';
          const openedMonths = isOpened ? (parseInt(openedMonthsInput?.value) || 0) : 0;

          if (!mfgDateVal) {
            statusBadgeEl.className = 'calc-badge badge-neutral';
            statusBadgeEl.textContent = 'Awaiting Manufacture Date';
            shelfDaysEl.textContent = '—';
            expiryDateEl.textContent = '—';
            protocolEl.textContent = 'Enter the batch manufacture date printed on the product crimp or base to calculate safety limits.';
            return;
          }

          const mfgDate = new Date(mfgDateVal);
          const today = new Date();

          // Standard sealed shelf life by category
          let sealedMonths = 36;
          if (category === 'mascara') sealedMonths = 24;
          if (category === 'serum') sealedMonths = 24;
          if (category === 'organic') sealedMonths = 18;
          if (category === 'perfume') sealedMonths = 48;
          if (category === 'powder') sealedMonths = 36;

          const sealedExpiry = new Date(mfgDate);
          sealedExpiry.setMonth(sealedExpiry.getMonth() + sealedMonths);

          let finalExpiry = new Date(sealedExpiry);
          let reason = 'Sealed Shelf-Life';

          if (isOpened) {
            // Expiry is limited by PAO (Period After Opening)
            const openedDate = new Date();
            openedDate.setMonth(openedDate.getMonth() - openedMonths);
            const paoExpiry = new Date(openedDate);
            paoExpiry.setMonth(paoExpiry.getMonth() + paoMonths);

            if (paoExpiry < sealedExpiry) {
              finalExpiry = paoExpiry;
              reason = `PAO (${paoMonths}M After Opening)`;
            }
          }

          const diffTime = finalExpiry - today;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          const options = { year: 'numeric', month: 'short', day: 'numeric' };
          expiryDateEl.textContent = finalExpiry.toLocaleDateString('en-US', options);

          if (diffDays <= 0) {
            statusBadgeEl.className = 'calc-badge badge-danger';
            statusBadgeEl.textContent = 'EXPIRED / UNSAFE FOR SALE OR USE';
            shelfDaysEl.textContent = '0 Days (Expired)';
            protocolEl.innerHTML = `<strong>Immediate Discard Protocol:</strong> Formula has passed safe microbiological stability governed by Nepal's cosmetic safety standards. Never sell or apply expired formulations. Risk of bacterial contamination, oxidation, or dermal irritation.`;
          } else if (diffDays <= 90) {
            statusBadgeEl.className = 'calc-badge badge-warning';
            statusBadgeEl.textContent = 'NEAR-EXPIRY / SHORT SHELF-LIFE';
            shelfDaysEl.textContent = `${diffDays} Days Remaining`;
            protocolEl.innerHTML = `<strong>Clearance / Rapid Rotation Notice:</strong> Product remains chemically stable for only <strong>${diffDays} days</strong> (${reason}). Retailers should discount for immediate sale under FEFO (First-Expired, First-Out) protocols. Do not hold in long-term stock.`;
          } else {
            statusBadgeEl.className = 'calc-badge badge-success';
            statusBadgeEl.textContent = 'FRESH & VERIFIED AUTHENTIC BATCH';
            shelfDaysEl.textContent = `${diffDays} Days (${Math.round(diffDays / 30)} Months)`;
            protocolEl.innerHTML = `<strong>Optimal Batch Condition:</strong> Valid sealed stability through <strong>${finalExpiry.toLocaleDateString('en-US', options)}</strong>. Store in a cool, dark environment below 28°C away from direct sunlight at your shop in Itahari. Fully certified for retail distribution.`;
          }
        } catch (err) {
          console.error('Batch expiry calc error:', err);
        }
      };

      if (openedSelect) {
        openedSelect.addEventListener('change', () => {
          toggleOpenedMonths();
          calculate();
        });
      }

      [categorySelect, mfgInput, paoSelect, openedMonthsInput].forEach(input => {
        if (input) {
          input.addEventListener('input', calculate);
          input.addEventListener('change', calculate);
        }
      });

      toggleOpenedMonths();
      calculate();
    } catch (e) {
      console.error('initBatchExpiryCalc failed:', e);
    }
  },

  // 4. Salon & Boutique Startup Inventory Budget Allocator
  initStartupBudgetCalc: function() {
    try {
      const container = document.getElementById('calc-startup-budget');
      if (!container) return;

      const budgetInput = container.querySelector('#sb-budget');
      const budgetSlider = container.querySelector('#sb-budget-slider');
      const ventureSelect = container.querySelector('#sb-venture');
      const focusSelect = container.querySelector('#sb-focus');

      const skincareAmountEl = container.querySelector('#sb-skincare-amount');
      const makeupAmountEl = container.querySelector('#sb-makeup-amount');
      const haircareAmountEl = container.querySelector('#sb-haircare-amount');
      const toolsAmountEl = container.querySelector('#sb-tools-amount');
      const bufferAmountEl = container.querySelector('#sb-buffer-amount');
      const estimatedSkusEl = container.querySelector('#sb-skus');
      const paybackEl = container.querySelector('#sb-payback');
      const adviceEl = container.querySelector('#sb-advice');

      // Sync slider and input
      if (budgetInput && budgetSlider) {
        budgetInput.addEventListener('input', () => {
          budgetSlider.value = budgetInput.value;
          calculate();
        });
        budgetSlider.addEventListener('input', () => {
          budgetInput.value = budgetSlider.value;
          calculate();
        });
      }

      const calculate = () => {
        try {
          const budget = parseFloat(budgetInput?.value || 150000) || 150000;
          const venture = ventureSelect?.value || 'retail-counter';
          const focus = focusSelect?.value || 'balanced';

          // Ratio allocations based on business archetype
          let ratios = { skincare: 0.35, makeup: 0.35, haircare: 0.15, tools: 0.10, buffer: 0.05 };

          if (venture === 'bridal-studio') {
            ratios = { skincare: 0.20, makeup: 0.50, haircare: 0.15, tools: 0.10, buffer: 0.05 };
          } else if (venture === 'hair-salon') {
            ratios = { skincare: 0.10, makeup: 0.15, haircare: 0.55, tools: 0.15, buffer: 0.05 };
          } else if (venture === 'luxury-boutique') {
            ratios = { skincare: 0.35, makeup: 0.35, haircare: 0.10, tools: 0.10, buffer: 0.10 };
          }

          // Modify by focus preference
          if (focus === 'skincare-heavy') {
            ratios.skincare += 0.15;
            ratios.makeup = Math.max(0.10, ratios.makeup - 0.10);
            ratios.haircare = Math.max(0.05, ratios.haircare - 0.05);
          } else if (focus === 'makeup-heavy') {
            ratios.makeup += 0.15;
            ratios.skincare = Math.max(0.10, ratios.skincare - 0.10);
            ratios.haircare = Math.max(0.05, ratios.haircare - 0.05);
          }

          const skincareAmt = budget * ratios.skincare;
          const makeupAmt = budget * ratios.makeup;
          const haircareAmt = budget * ratios.haircare;
          const toolsAmt = budget * ratios.tools;
          const bufferAmt = budget * ratios.buffer;

          if (skincareAmountEl) skincareAmountEl.textContent = BabaCalculators.formatNPR(skincareAmt);
          if (makeupAmountEl) makeupAmountEl.textContent = BabaCalculators.formatNPR(makeupAmt);
          if (haircareAmountEl) haircareAmountEl.textContent = BabaCalculators.formatNPR(haircareAmt);
          if (toolsAmountEl) toolsAmountEl.textContent = BabaCalculators.formatNPR(toolsAmt);
          if (bufferAmountEl) bufferAmountEl.textContent = BabaCalculators.formatNPR(bufferAmt);

          // Estimate initial SKU breadth based on average wholesale price points in Nepal
          const estSkus = Math.round(budget / 1400);
          if (estimatedSkusEl) estimatedSkusEl.textContent = `~${estSkus} SKUs`;

          let paybackText = '45–60 Days';
          if (budget < 100000) paybackText = '30–45 Days';
          else if (budget > 500000) paybackText = '60–90 Days';
          if (paybackEl) paybackEl.textContent = paybackText;

          if (adviceEl) {
            adviceEl.innerHTML = `<strong>Strategic Recommendation for ${venture.replace('-', ' ').toUpperCase()}:</strong> With an allocation of <strong>${BabaCalculators.formatNPR(budget)}</strong>, we recommend securing our verified starter carton package. This provides high-velocity foundations, daily moisturizers, and trending sunscreens with a projected gross margin of 32–42% across Sunsari and Morang districts.`;
          }
        } catch (err) {
          console.error('Startup budget calc error:', err);
        }
      };

      [ventureSelect, focusSelect].forEach(input => {
        if (input) {
          input.addEventListener('change', calculate);
        }
      });

      calculate();
    } catch (e) {
      console.error('initStartupBudgetCalc failed:', e);
    }
  },

  // Initialize all tools present on page
  init: function() {
    BabaCalculators.initWholesaleMarginCalc();
    BabaCalculators.initInventoryRestockCalc();
    BabaCalculators.initBatchExpiryCalc();
    BabaCalculators.initStartupBudgetCalc();
  }
};

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', BabaCalculators.init);
} else {
  BabaCalculators.init();
}

window.BabaCalculators = BabaCalculators;
