import {
  QrCode,
  Landmark,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import mpesaQR from "../../assets/payment/mpesa-qr.png";

export default function Payments() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>
      <Container>
        <SectionTitle
          eyebrow="Payments"
          title="Easy & Secure M-Pesa Payments"
          description="Pay conveniently using M-Pesa PayBill or simply scan the QR code below for a fast and secure payment experience."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* PayBill Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <Landmark className="h-7 w-7 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              M-Pesa PayBill
            </h3>

            <p className="mt-3 text-slate-600">
              Buy me coffee using the PayBill details below.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Business Number
                </p>

                <p className="mt-2 text-4xl font-extrabold tracking-widest text-slate-900">
                  714888
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Account Number
                </p>

                <p className="mt-2 text-3xl font-bold tracking-wide text-slate-900">
                  208269
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-700">
                <Smartphone className="h-5 w-5" />
                Follow the Steps to buy Me Coffee via M-Pesa PayBill
              </h4>

              <ol className="space-y-2 text-sm leading-6 text-slate-700">
                <li>1. Open the M-Pesa Menu.</li>
                <li>2. Select <strong>Lipa na M-Pesa</strong>.</li>
                <li>3. Tap <strong>PayBill</strong>.</li>
                <li>
                  4. Enter Business Number <strong>714888</strong>.
                </li>
                <li>
                  5. Enter Account Number <strong>208269</strong>.
                </li>
                <li>6. Enter the payment amount.</li>
                <li>7. Enter your M-Pesa PIN.</li>
                <li>8. Confirm the transaction.</li>
              </ol>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <QrCode className="h-7 w-7 text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Scan QR to Buy me Coffee
            </h3>

            <p className="mt-3 text-slate-600">
              Open the M-Pesa App and scan the QR code below to buy me Coffee.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src={mpesaQR}
                  alt="M-Pesa Payment QR Code"
                  className="h-72 w-72 rounded-2xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />

                <p className="text-sm leading-6 text-slate-700">
                  After completing your payment, kindly retain your M-Pesa
                  confirmation message for your records. If requested, you may
                  share the confirmation via WhatsApp, SMS, or Email for faster
                  verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
