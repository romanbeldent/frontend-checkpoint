import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import CountryInput from "../types";

const CreateCountryForm = ({
    submitToBackend,
}: {
    submitToBackend: any;
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CountryInput>({
        criteriaMode: "all",
    });

    const onSubmit: SubmitHandler<CountryInput> = async (data: any) => {
        const dataForBackend: any = {
            ...data,
        };

        await submitToBackend({ variables: { data: dataForBackend } });
    };

    {
        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <>
                        <label>
                            Name
                            <br />
                            <input
                                className="text-field"
                                {...register("name", {
                                    minLength: { value: 2, message: "Minimum 2 characters" },
                                    required: "This field is required",
                                })}
                            />
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => {
                                    console.log(message);
                                    return (
                                        <Fragment key={type}>
                                            <br />
                                            <span className="error-message">{message}</span>
                                        </Fragment>
                                    );
                                })
                            }
                        />
                    </>
                    <br />
                    <>
                        <label>
                            Emoji
                            <br />
                            <input
                                className="text-field"
                                {...register("emoji", {
                                    minLength: { value: 2, message: "Minimum 2 characters" },
                                    required: "This field is required",
                                })}
                            />
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="emoji"
                            render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => {
                                    console.log(message);
                                    return (
                                        <Fragment key={type}>
                                            <br />
                                            <span className="error-message">{message}</span>
                                        </Fragment>
                                    );
                                })
                            }
                        />
                    </>
                    <br />
                    <>
                        <label>
                            Code
                            <br />
                            <input
                                className="text-field"
                                {...register("code", {
                                    minLength: { value: 2, message: "Minimum 2 characters" },
                                    required: "This field is required",
                                })}
                            />
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="code"
                            render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => {
                                    console.log(message);
                                    return (
                                        <Fragment key={type}>
                                            <br />
                                            <span className="error-message">{message}</span>
                                        </Fragment>
                                    );
                                })
                            }
                        />
                    </>
                    <br />
                    <input type="submit" className="button" />
                </form>
            </>
        );
    }
};

export default CreateCountryForm;