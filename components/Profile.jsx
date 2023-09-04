import PromptCard from "./PromptCard";
import Image from "next/image";

const Profile = ({ name, desc, image, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="head_text text-left">
            <span className="blue_gradient">{name}</span>
          </h1>
          <p className="desc text-left">{desc}</p>
        </div>
        <Image
          src={image}
          alt="profile"
          className="rounded-full py-8 mr-20"
          width={65}
          height={20}
          onClick={() => {}}
        />
      </div>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
