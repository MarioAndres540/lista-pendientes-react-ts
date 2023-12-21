import { Tarea } from "./Tarea";

type ListaTareaProps = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareaProps) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    tarea={tarea}
                    borrarTarea={() => borrarTarea(index)}
                ></Tarea>
            ))}
        </div>
    );
};
