import { useForm, useFieldArray } from "react-hook-form";
import { FaTrashAlt } from "react-icons/fa";
import Input, { IWraper } from "../../Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Email is required"),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "Phone must contain only numbers (0-9)" }),
});

const ContactDetails = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      socialMedia: [{ url: "" }],
    },
    resolver: zodResolver(schema),
  });

  const {
    fields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    control,
    name: "socialMedia",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold my-6">Contact Details</h2>

      <IWraper errors={errors} register={register}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input name={"email"} type="email" label={"Email"}></Input>

          <Input name={"phone"} type="tel" label={"Phone"}></Input>
        </div>
      </IWraper>

      <div className="border-t border-gray-300 mt-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <button
            type="button"
            onClick={() => appendSocialMedia({ url: "" })}
            className="text-blue-500 hover:text-blue-700"
          >
            Add URL
          </button>
        </div>
        <div className="space-y-4 mt-4">
          {fields.map((item, index) => (
            <IWraper key={item.id} register={register} errors={errors}>
              <div className="flex items-center space-x-4">
                <Input
                  name={`socialMedia.${index}.url`}
                  type="text"
                  placeholder="Social Media URL"
                  labelClass="flex-1"
                />
                <FaTrashAlt
                  onClick={() => removeSocialMedia(index)}
                  className="text-red-500 cursor-pointer"
                  title="Remove URL"
                />
              </div>
            </IWraper>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactDetails;
