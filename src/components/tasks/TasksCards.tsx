import Tag from "../common/tag/Tag";
import deleteIcon from "../../assets/delete.png";
interface TasksType {
  title: string;
  tags: string;
  handleDelete:() =>void;
  index:string;
}
const TasksCards = ({ title, tags,handleDelete,index }: TasksType) => {
  // console.log(tags);
  return (
    <article className=" p-4 border rounded-md my-3 mx-2 shadow-sm">
      <header className="  ">
        <h2 className=" my-3">{title}</h2>
        <div className="  flex items-center   justify-between  gap-10">
          <div className=" ">
            {
              // tags.map((tag) => console.log(tag))
              tags.map((tag, index) => (
                <Tag
                  key={index}
                  tagTitle={tag}
                  selected
                  className="px-2 py-1 border rounded-md "
                />
              ))
            }
          </div>
          <div className="  w-10 h-10 p-3 hover:bg-slate-100   rounded-3xl duration-75 cursor-pointer" onClick={() =>handleDelete(index)}>
            <img src={deleteIcon} alt="" className=" "  />
          </div>
        </div>
      </header>
    </article>
  );
};

export default TasksCards;
