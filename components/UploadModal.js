import React from "react";

const styles = {
  wrapper: `w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  largeField: ``,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
  inputField: `w-full border-0 outline-none bg-transparent`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

const UploadModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Upload a Post</div>
    </div>
  );
};

export default UploadModal;
