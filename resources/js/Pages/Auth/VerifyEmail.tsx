import React from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

interface Props {
    status: string;
}

export default function VerifyEmail({ status }: Props) {
    const { post, processing } = useForm();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <Guest>
            <Head title="Confirmación de dirección de correo electrónico" />

            <div className="mb-4 text-sm text-gray-600">
                ¡Gracias por registrarte! Comprueba la dirección de correo electrónico que recibiste.
                Si no recibiste el correo electrónico, vuelva a enviar el correo electrónico utilizando el botón a continuación.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    Se ha enviado un nuevo correo electrónico a su dirección de correo electrónico registrada.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button className="bg-gray-900" processing={processing}>
                        Reenviar correo
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Cerrar Sesión
                    </Link>
                </div>
            </form>
        </Guest>
    );
}
