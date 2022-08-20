import React, {ChangeEvent} from "react";
// import styles from "../CommonInput.module.css";
//
// type PropsType = {
//     value: string;
//     error: boolean;
//     onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => any
// }
//
// const Input = ({value, error, onChangeHandler}: PropsType) => {
//     console.log("Input")
//
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         onChangeHandler(e.currentTarget.value);
//     }
//
//     return (
//         <div>
//             <input
//                 className={styles.input}
//                 value={value}
//                 type={"number"}
//                 min={0}
//                 onChange={onChange}
//             />
//             {error ? <div style={{color: "red"}}>Add sum and choose category</div> : ""}
//         </div>
//     );
// };
//
// export default Input;