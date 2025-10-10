import { useState, type ChangeEvent, type FormEvent } from "react";
import { socialLinks } from "../constants/socialLinks";
import { Toaster, toast } from "sonner";

type FormDataType = {
    name: string;
    email: string;
    message: string;
};

const initialState: FormDataType = {
    name: "",
    email: "",
    message: ""
}


export default function Contact() {
    const [data, setData] = useState<FormDataType>(initialState);
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            setIsSending(true);

            const res = await fetch("https://getform.io/f/azygdzrb", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })

            if (res.ok) {
                toast.success("Your message has been sent!");
                setData(initialState);
            }

        } catch (err) {
            console.error(err);
            toast.error("Failed to send the message.");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section
            id='contact'
            className='section'
        >
            <Toaster richColors position="top-center" />
            <div className="container flex flex-col justify-between mx-auto md:items-stretch md:flex-row">
                <div className="mb-12 md:flex-1 md:mb-0 md:flex md:flex-col">
                    <h5 className="headline-2 lg:max-w-md">
                        Contact me for collaboration
                    </h5>
                    <p className="max-w-sm mt-3 mb-8 text-zinc-400 lg:max-w-md">
                        Reach out today to discuss your project needs and start collaborating on something amazing!
                    </p>

                    <div className="flex items-center gap-2 mt-auto">
                        {socialLinks.map(({ href, icon }, idx) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={idx}
                                className="grid transition-all rounded-lg size-12 ring-zinc-50/5 ring-inset ring-2 hover:bg-zinc-50 place-items-center hover:text-zinc-950 active:bg-zinc-50/80"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <form className="md:flex-1 xl:pl-10 2xl:pl-20" onSubmit={handleSubmit}>
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="label">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                autoComplete="name"
                                required
                                placeholder="Bilal Benyoussef"
                                name="name"
                                className="text-field"
                                onChange={handleChange}
                                value={data.name}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                required
                                placeholder="bilal@example.com"
                                name="email"
                                className="text-field"
                                onChange={handleChange}
                                value={data.email}
                            />
                        </div>

                        <div className="mb-4 md:col-span-2">
                            <label
                                htmlFor="message"
                                className="label">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Hi!"
                                required
                                className="resize-y text-field min-h-32 max-h-80"
                                onChange={handleChange}
                                value={data.message}
                            >

                            </textarea>
                        </div>
                    </div>
                    <div>
                        {/* add hidden Honeypot input to prevent spams */}
                        <input
                            type="hidden"
                            name="_gotcha"
                            className="!hidden"
                        />

                        <button type="submit" className="btn btn-primary [&]:max-w-full w-full disabled:bg-sky-950 disabled:pointer-events-none disabled:text-white justify-center" disabled={isSending}>
                            {isSending ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
