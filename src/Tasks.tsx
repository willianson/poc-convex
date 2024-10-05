import { Id } from "../convex/_generated/dataModel";
import { Task } from "./global";

interface TasksProps {
  data?: Task[];
  onDelete: (id: Id<"tasks">) => void;
}

function Tasks(props: TasksProps){
  const { data = [] } = props;
  const isEmpty = data.length === 0;

  return (
    <section className="list">
        {isEmpty ?
          <div className="empty">
            Your list is empty.
          </div>
        : 
          <ul>
            {data.map(({ _id, text}) => {
              return (
                <li key={_id}>
                  <label>
                    {/* <input type="checkbox" checked={isCompleted} /> */}
                    <span>{text}</span>
                  </label>
                  <button onClick={() => props.onDelete(_id)}>X</button>
                </li>
              );
            })}
          </ul>
        }
      </section>
  );
}

export default Tasks;