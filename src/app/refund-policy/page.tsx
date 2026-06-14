import PageHeader from '@/components/category/PageHeader';

export const metadata = { title: 'Refund Policy — PetWago' };

export default function RefundPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Refund & Return Policy"
        subtitle="Last updated: May 24, 2026"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Refund Policy' }]}
      />

      <div className="bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          {/* Quick summary cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { value: '30', unit: 'days', title: 'Return Window', desc: 'Return eligible items within 30 days of delivery' },
              { value: '5–10', unit: 'days', title: 'Refund Timeline', desc: 'Refunds processed within 5–10 business days' },
              { value: '100%', unit: '', title: 'Satisfaction Guarantee', desc: "If your pet doesn't love it, we'll make it right" },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-sm border border-border p-5 text-center">
                <p className="font-serif text-2xl font-bold text-charcoal">
                  {item.value}<span className="text-base font-semibold text-muted ml-1">{item.unit}</span>
                </p>
                <p className="font-bold text-foreground text-sm mt-1">{item.title}</p>
                <p className="text-xs text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <PolicyBlock title="Overview">
              At PetWago.com, we want you and your pet to be completely satisfied with every purchase. If for any reason you are not happy with your order, we offer a straightforward 30-day return policy for eligible items. We stand behind every product we sell and are committed to making the return process as easy as possible.
            </PolicyBlock>

            <PolicyBlock title="Eligibility for Returns">
              <>
                <p className="mb-3">To be eligible for a return, the following conditions must be met:</p>
                <ul className="space-y-2 text-sm list-none">
                  {[
                    'The item must be returned within 30 days of the original delivery date',
                    'The item must be in its original, unopened condition',
                    'Dry food bags and wet food cases must be sealed and unopened',
                    'Supplies (beds, toys, bowls, carriers, etc.) must be unused and in original packaging',
                    'You must have proof of purchase (order number or receipt)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5 flex-shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            </PolicyBlock>

            <PolicyBlock title="Non-Refundable Items">
              <>
                <p className="mb-3">The following items are not eligible for return or refund:</p>
                <ul className="space-y-2 text-sm list-none">
                  {[
                    'Opened or partially used pet food (dry food, wet food, fresh/frozen)',
                    'Veterinary prescription diet foods once the seal is broken',
                    'Fresh and frozen foods (due to the perishable nature of the product)',
                    'Items marked as "Final Sale" or "Non-Returnable" on the product page',
                    'Personalized or custom-made products',
                    'Digital products or subscriptions',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-muted mt-0.5 flex-shrink-0 font-bold">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            </PolicyBlock>

            <PolicyBlock title="How to Initiate a Return">
              <>
                <p className="mb-3">To start a return, please follow these steps:</p>
                <ol className="space-y-3 text-sm list-none">
                  {[
                    'Contact our customer support team at support@petwago.com or call 1-800-PETWAGO within 30 days of receiving your order.',
                    'Provide your order number, the item(s) you wish to return, and the reason for the return.',
                    'Our team will send you a Return Merchandise Authorization (RMA) number and prepaid return shipping label within 1–2 business days.',
                    'Pack the item securely in its original packaging (if available) and attach the return label.',
                    'Drop the package off at any authorized shipping location. Keep your tracking number for reference.',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="bg-sage text-cream text-xs font-bold w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ol>
              </>
            </PolicyBlock>

            <PolicyBlock title="Refund Processing">
              <>
                <p className="mb-3">Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund via email. If approved:</p>
                <ul className="space-y-2 text-sm list-none">
                  {[
                    'Refunds are processed within 5–10 business days of receiving the return',
                    'The refund will be issued to your original payment method',
                    'Credit card refunds may take an additional 3–5 business days to appear on your statement depending on your bank',
                    'Original shipping charges are non-refundable unless the return is due to our error',
                    'If you used a promo code, the discount value will not be refunded',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            </PolicyBlock>

            <PolicyBlock title="Damaged or Incorrect Items">
              If you received a damaged, defective, or incorrect item, please contact us within 7 days of delivery. We will arrange for a free return and send a replacement item at no additional charge, or issue a full refund including original shipping costs. Please take photos of the damaged item and packaging as these may be required for our quality control process.
            </PolicyBlock>

            <PolicyBlock title="Exchanges">
              We do not currently offer direct exchanges. If you wish to exchange a product, please return the original item following the process above and place a new order for the desired product. If you need assistance, our customer support team is happy to help.
            </PolicyBlock>

            <PolicyBlock title="Subscription Orders">
              For subscription-based fresh food orders, you may cancel or modify your subscription at any time. Cancellations must be made at least 24 hours before your next scheduled delivery to avoid being charged. Refunds for subscription orders follow the same policy as regular orders.
            </PolicyBlock>

            <PolicyBlock title="Contact Us">
              <>
                <p className="mb-3">For any questions about our Refund Policy, please reach out to our customer support team:</p>
                <div className="space-y-1 text-sm">
                  <p>📧 <strong><a href="mailto:support@petwago.com" className="text-sage hover:text-sage-dark hover:underline">support@petwago.com</a></strong></p>
                  <p>📞 <strong>1-800-PETWAGO</strong> (Mon–Fri, 9am–6pm EST)</p>
                  <p>💬 Live chat available on our website during business hours</p>
                </div>
              </>
            </PolicyBlock>
          </div>
        </div>
      </div>
    </main>
  );
}

function PolicyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-sm border border-border p-6">
      <h2 className="font-serif text-lg font-bold text-charcoal mb-3 pb-3 border-b border-border">{title}</h2>
      <div className="text-muted leading-relaxed text-sm">{children}</div>
    </div>
  );
}
