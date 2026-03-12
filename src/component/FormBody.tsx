"use client"
import { useEmailService } from "@/constant/useEmailService";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormBody() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [startTime, setStartTime] = useState<Date | null>(new Date());
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        setStatus("loading");

        // Inject date/time as hidden inputs since DatePicker doesn't use name attr
        const dateInput = form.current.querySelector<HTMLInputElement>('[name="dzDate"]');
        const timeInput = form.current.querySelector<HTMLInputElement>('[name="dzTime"]');
        if (dateInput) dateInput.value = startDate?.toLocaleDateString() || "";
        if (timeInput) timeInput.value = startTime?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) || "";

        const result = await sendEmail(form.current);
        if (result.success) {
            console.log("SUCCESS!", result.message);
            setStatus("success");
            form.current.reset();
        } else {
            console.error("FAILED...", result.message);
            setStatus("error");
        }
    };

    return (
        <div className="form-body">
            <div className="title-head">
                <h2 className="form-title m-b20">Book Your Appointment</h2>
            </div>
            <form ref={form} onSubmit={handleSubmit} className="dzForm" method="POST">
                <input type="hidden" name="dzToDo" value="/Appointment" />
                {/* Hidden fields for DatePicker values */}
                <input type="hidden" name="dzDate" />
                <input type="hidden" name="dzTime" />

                <div className="row">
                    <div className="col-sm-12 m-b30">
                        <div className="floating-underline underline-1 input-light input-icon-left">
                            <span className="input-group-text text-primary"><i className="feather icon-user" /></span>
                            <input name="dzName" type="text" className="form-control" placeholder="Your Name" required />
                        </div>
                    </div>
                    <div className="col-sm-12 m-b30">
                        <div className="floating-underline underline-1 input-light input-icon-left">
                            <span className="input-group-text text-primary"><i className="feather icon-mail" /></span>
                            <input name="dzEmail" type="email" className="form-control" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="col-sm-12 m-b30">
                        <div className="floating-underline underline-1 input-light input-icon-left">
                            <span className="input-group-text text-primary"><i className="feather icon-phone" /></span>
                            <input name="dzPhoneNumber" type="number" className="form-control" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="col-sm-6 m-b30">
                        <div className="floating-underline underline-1 input-light input-icon-left">
                            <span className="input-group-text text-primary"><i className="feather icon-calendar" /></span>
                            <DatePicker
                                className="form-control"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                minDate={new Date()}
                                placeholderText="Select Date"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 m-b30">
                        <div className="floating-underline underline-1 input-light input-icon-left">
                            <span className="input-group-text text-primary"><i className="feather icon-clock" /></span>
                            <DatePicker
                                selected={startTime}
                                onChange={(date) => setStartTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        {[
                            { id: "checkBox1", label: "Skin Allergy Testing" },
                            { id: "checkBox2", label: "Laser Treatments" },
                            { id: "checkBox3", label: "Hair Fall Treatments" },
                        ].map(({ id, label }) => (
                            <div className="form-check2 m-b5" key={id}>
                                <input className="form-check-input" type="checkbox" id={id} />
                                <label className="form-check-label" htmlFor={id}>{label}</label>
                            </div>
                        ))}
                    </div>
                    <div className="col-sm-6 m-b30">
                        {[
                            { id: "checkBox4", label: "Plastic Surgery" },
                            { id: "checkBox5", label: "Acne Scar Treatment" },
                            { id: "checkBox6", label: "Pedicure" },
                        ].map(({ id, label }) => (
                            <div className="form-check2 m-b5" key={id}>
                                <input className="form-check-input" type="checkbox" id={id} />
                                <label className="form-check-label" htmlFor={id}>{label}</label>
                            </div>
                        ))}
                    </div>

                    {/* Status messages */}
                    {status === "success" && (
                        <div className="col-sm-12 m-b10">
                            <div className="alert alert-success">✅ Appointment booked! Check your email.</div>
                        </div>
                    )}
                    {status === "error" && (
                        <div className="col-sm-12 m-b10">
                            <div className="alert alert-danger">❌ Failed to send. Please try again.</div>
                        </div>
                    )}

                    <div className="col-sm-12 m-t10">
                        <button
                            type="submit"
                            name="submit"
                            className="btn btn-lg btn-white w-100"
                            disabled={status === "loading"}
                        >
                            <i className="feather icon-calendar m-r5" />
                            {status === "loading" ? "Sending..." : "Book An Appointment"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormBody;