import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black bg-opacity-25 fixed inset-0 -z-[1] "
    ></motion.div>
  );
};

export default Backdrop;
