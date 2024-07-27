import { useState } from "react";
import Input, { IWraper } from "../../Input";
import Button from "../../Button";
import { FaUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";

const BasicDetails = () => {
  const [profileImage, setProfileImage] = useState(null);
  const form = useForm();
  const { register } = form;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md space-y-4">
      <div className="flex flex-col items-center">
        <label htmlFor="profileImage" className="cursor-pointer">
          <div
            className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden relative"
            style={{
              backgroundImage: `url(${profileImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!profileImage && <FaUpload className="text-gray-500 text-3xl" />}
          </div>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
        <div className="mt-4 flex gap-4 items-end">
          <IWraper register={register}>
            <Input label="Name" name="name" />
          </IWraper>

          <div>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
