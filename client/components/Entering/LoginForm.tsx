import { Dispatch, SetStateAction } from "react";
import { tabs } from "../../sections/EnterSection";
import { useForm, SubmitHandler } from "react-hook-form";
import PasswordSvg from "../svg/PasswordSvg";
import MainSvg from "../svg/MainSvg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInMotion } from "../../motions/FadeMotion";

interface ILoginForm {
  activeTab: tabs;
  setActiveTab: Dispatch<SetStateAction<tabs>>;
}

interface Inputs {
  Email: string;
  Password: string;
}

const schema = yup
  .object({
    Email: yup
      .string()
      .email("Incorrect Email")
      .required("Email can`t be empty"),
    Password: yup.string().required("Password can`t be empty")
  })
  .required();

const LoginForm = ({ activeTab, setActiveTab }: ILoginForm) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <AnimatePresence>
      {activeTab == 0 && (
        <motion.div
          className={"LoginWindow"}
          variants={FadeInMotion()}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={0}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.span variants={FadeInMotion(1)}>
              Please input your Innopolis email and password to gain access.
            </motion.span>
            <motion.h3 variants={FadeInMotion(2)}>Welcome Back</motion.h3>
            <motion.div variants={FadeInMotion(3)} className="inputWrapper">
              {errors.Email ? (
                <p className="errorLabel">{errors.Email?.message}</p>
              ) : null}
              <MainSvg />
              <input
                placeholder="Enter your email address"
                {...register("Email", { required: true })}
                type="text"
              />
            </motion.div>

            <motion.div variants={FadeInMotion(4)} className="inputWrapper">
              {errors.Password ? (
                <p className="errorLabel">{errors.Password?.message}</p>
              ) : null}
              <PasswordSvg />
              <input
                placeholder="Enter your password"
                {...register("Password", { required: true })}
                type="password"
              />
            </motion.div>
            <motion.button variants={FadeInMotion(5)} type="submit">
              Log In
            </motion.button>
            <motion.p variants={FadeInMotion(6)} className="switcher">
              First time here?{" "}
              <span onClick={() => setActiveTab(1)}>Register</span>
            </motion.p>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginForm;
