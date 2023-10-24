import TasksCards from "./TasksCards";

interface TaskType {
  title: string;
  icon: string;
  tasks: never[];
  status: string;
  handleDelete:() =>void;
}

const TasksColumn = ({ title, icon, tasks, status,handleDelete }: TaskType) => {
  // console.log(tasks);
  return (
    <div className="  ">
      <h2 className=" flex  items-center gap-3 text-[22px] my-3">
        <img src={icon} alt="" className=" w-8 h-8" />
        {title}
      </h2>
      <div className=" ">
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TasksCards key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} />
            )
        )}
      </div>
    </div>
  );
};

export default TasksColumn;
