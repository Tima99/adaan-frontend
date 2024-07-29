import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import Input, { IWraper } from "../../Input";
import Button from "../../Button";
import { toast } from "react-hot-toast";
import { authApi } from "../../../api";

function SkillsForm() {
  const [skills, setSkills] = useState([]);
  const methods = useForm();

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const onSubmit = (data) => {
    addSkill(data.skill);
    methods.reset();
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await authApi.get(`/profile/skills`);
        if (!data?.length) return;
        setSkills(data);
      } catch (error) {
        toast.error("Could not fetch data");
      }
    })();
  }, []);

  const handleSubmitSkills = async () => {
    try {
      await authApi.patch(`/profile/skills`, [...skills]);
      toast.success("Saved Successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Request Failed");
    }
  };

  return (
    <FormProvider {...methods}>
      <h2 className="text-2xl font-bold my-4">Skills</h2>

      <IWraper register={methods.register}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex gap-4 items-center"
        >
          <Input
            label=""
            name="skill"
            className="flex-grow"
            validation={{ required: "Skill is required" }}
          />
          <Button type="submit">Add</Button>
        </form>
        <div className="mt-4 flex gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 p-2 border rounded mb-2"
            >
              <span>{skill}</span>
              <FaTimes
                className="text-red-500 cursor-pointer"
                onClick={() => removeSkill(skill)}
              />
            </div>
          ))}
        </div>
      </IWraper>
      <Button
        disabled={methods.formState.isSubmitting}
        onClick={handleSubmitSkills}
        className="mt-4"
      >
        Submit
      </Button>
    </FormProvider>
  );
}

export default SkillsForm;
