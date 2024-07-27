import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input, { IWraper } from "../../Input";
import Button from "../../Button";
import "./PastExperience.css";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  experiences: z.array(
    z.object({
      position: z.string().min(1, { message: "Position is required" }),
      company: z.string().min(1, { message: "Company is required" }),
      startDate: z.string().min(1, { message: "Start Date is required" }),
      endDate: z.string().optional(),
      currentlyWorking: z.boolean(),
      summary: z.string().max(300, "Summary can't exceed 300 characters"),
    })
  ),
});

const PastExperience = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      experiences: [
        {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          summary: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="header-container">
        <h2 className="heading">Past Experience</h2>
        <Button.Outline
          type="button"
          onClick={() =>
            append({
              position: "",
              company: "",
              startDate: "",
              endDate: "",
              currentlyWorking: false,
              summary: "",
            })
          }
        >
          Add Experience
        </Button.Outline>
      </div>
      <div className="experiences-container">
        <AnimatePresence>
          {fields.map((item, index) => {
            const currentlyWorking = watch(
              `experiences.${index}.currentlyWorking`
            );
            const summary = watch(`experiences.${index}.summary`);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-md mb-4 xl:mb-0"
              >
                <IWraper errors={errors} register={register}>
                  <div className="experience-grid p-4">
                    <Input
                      label="Position / Title"
                      name={`experiences.${index}.position`}
                      validation={{ required: "Position is required" }}
                    />
                    <Input
                      label="Company"
                      name={`experiences.${index}.company`}
                      validation={{ required: "Company is required" }}
                    />
                    <Input
                      label="Start Date"
                      name={`experiences.${index}.startDate`}
                      type="date"
                      validation={{ required: "Start Date is required" }}
                    />
                    <Input
                      label="End Date"
                      name={`experiences.${index}.endDate`}
                      type="date"
                      disabled={currentlyWorking}
                    />
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        {...register(`experiences.${index}.currentlyWorking`, {
                          onChange: () => {
                            setValue(`experiences.${index}.endDate`, "");
                          },
                        })}
                      />
                      Currently Working
                    </label>
                    <div className="textarea-wrapper">
                      <label>
                        <span className="font-semibold text-sm">Summary</span>
                        <textarea
                          className="p-2 border-primary border outline-none rounded-md w-full"
                          {...register(`experiences.${index}.summary`, {
                            maxLength: 300,
                          })}
                        />
                        <div className="char-counter">
                          {summary?.length || 0}/300
                        </div>
                      </label>
                    </div>
                    <Button.Outline type="button" onClick={() => remove(index)}>
                      Remove
                    </Button.Outline>
                  </div>
                </IWraper>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PastExperience;
