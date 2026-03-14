"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

import { DESTINATIONS } from "@/data/destinations";

export default function ContactForm() {
    const t = useTranslations("contact.form");
    const destT = useTranslations("destinations.list");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage-50 p-12 rounded-3xl text-center border border-sage-200"
            >
                <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-serif text-3xl text-sage-800 mb-4">{t("success")}</h3>
                <Button variant="secondary" onClick={() => setStatus("idle")}>
                    Enviar otro mensaje
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-sage-700 ml-1">
                        {t("name")}
                    </label>
                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all"
                        placeholder="Juan Pérez"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-sage-700 ml-1">
                        {t("email")}
                    </label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all"
                        placeholder="juan@ejemplo.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-sage-700 ml-1">
                        {t("phone")}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all"
                        placeholder="+34 600 000 000"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="destination" className="text-sm font-medium text-sage-700 ml-1">
                        {t("destination")}
                    </label>
                    <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all appearance-none"
                    >
                        <option value="" disabled>{t("destinationPlaceholder")}</option>
                        {DESTINATIONS.map((dest) => (
                            <option key={dest.id} value={dest.slug}>
                                {destT(`${dest.id}.title`)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-sage-700 ml-1">
                    {t("message")}
                </label>
                <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t("messagePlaceholder")}
                />
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full md:w-auto min-w-50"
                >
                    {status === "sending" ? t("sending") : t("submit")}
                </Button>
            </div>

            {status === "error" && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm italic"
                >
                    {t("error")}
                </motion.p>
            )}
        </form>
    );
}
