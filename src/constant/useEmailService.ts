"use client";
import { useRouter } from "next/navigation";

export function useEmailService() {
    const router = useRouter();

    const sendEmail = async (formEl: HTMLFormElement) => {
        try {
            const formData = new FormData(formEl);

            // Get checked services
            const services: string[] = [];
            const checkboxMap: Record<string, string> = {
                checkBox1: "Skin Allergy Testing",
                checkBox2: "Laser Treatments",
                checkBox3: "Hair Fall Treatments",
                checkBox4: "Plastic Surgery",
                checkBox5: "Acne Scar Treatment",
                checkBox6: "Pedicure",
            };
            Object.entries(checkboxMap).forEach(([id, label]) => {
                const el = formEl.querySelector(`#${id}`) as HTMLInputElement;
                if (el?.checked) services.push(label);
            });

            const payload = {
                name: formData.get("dzName") as string,
                email: formData.get("dzEmail") as string,
                phone: formData.get("dzPhoneNumber") as string,
                message: formData.get("dzMessage") as string,   // ← ContactUs2 support
                date: formData.get("dzDate") as string,
                time: formData.get("dzTime") as string,
                services: services.join(", ") || undefined,
            };

            const res = await fetch("/api/appointment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                return { success: false, message: data.error || "Server error" };
            }

            router.push("/thank-you");  // ← redirect on success
            return { success: true, message: data.message || "Sent!" };

        } catch (err: any) {
            return { success: false, message: err.message || "Network error" };
        }
    };

    return { sendEmail };
}