import { useState } from "react";
import Button from "../common/button/Button";
import Tag from "../common/tag/Tag";
import "./taskForm.css";
import { AiOutlinePlus } from "react-icons/ai";

const TaskForm = ({ setTasks }) => {
  const [tasksData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // for selectedTagbtn
  const selectTag = (tag) => {
    if (tasksData.tags.some((item) => item === tag)) {
      const filterTag = tasksData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTag };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
    // console.log(tag);
  };

  //  for checked
  const checkedTag = (tag) => {
    return tasksData.tags.some((item) => item === tag);
  };

  // console.log("tasksData", tasksData);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(tasksData)
    setTasks((prev) => {
      return [...prev, tasksData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div className="    ">
      <form className=" " onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={tasksData.task}
          placeholder="Enter your task"
          className=" inputTask "
          onChange={handleChange}
        />

        <div className=" flex gap-5 items-center justify-between ">
          {/* for tag */}
          <div className=" flex gap-3">
            <Tag
              tagTitle="HTML"
              className=" border px-2 py-1 rounded-md cursor-pointer"
              selectTag={selectTag}
              selected={checkedTag("HTML")}
            />
            <Tag
              tagTitle="CSS"
              className=" border px-2 py-1 rounded-md cursor-pointer"
              selectTag={selectTag}
              selected={checkedTag("CSS")}
            />
            <Tag
              tagTitle="Javascript"
              className=" border px-2 py-1 rounded-md cursor-pointer"
              selectTag={selectTag}
              selected={checkedTag("Javascript")}
            />
            <Tag
              tagTitle="React"
              className=" border px-2 py-1 rounded-md cursor-pointer"
              selectTag={selectTag}
              selected={checkedTag("React")}
            />
          </div>

          <div className=" flex gap-3   items-center">
            <select
              className="px-8 bg-slate-100 py-3  border-outline-none rounded-md"
              onChange={handleChange}
              name="status"
              value={tasksData.status}
            >
              <option value="doing">Doing</option>
              <option value="todo">To Do</option>
              <option value="done">Done</option>
            </select>
            <Button
              type="submit"
              className=" px-5 py-3 rounded-md bg-indigo-500  flex items-center gap-1 text-white"
            >
              <AiOutlinePlus size={22} />
              <h2>Add Tasks</h2>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
