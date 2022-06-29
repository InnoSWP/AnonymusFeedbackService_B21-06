import MainSvg from "../svg/MainSvg";
import PasswordSvg from "../svg/PasswordSvg";
import { SubmitHandler, useForm } from "react-hook-form";
import { tabs } from "../../sections/EnterSection";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeInMotion } from "../../motions/FadeMotion";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { back_url } from "../../vars";
import { setUser } from "../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

interface IRegisterForm {
  activeTab: tabs;
  setActiveTab: Dispatch<SetStateAction<tabs>>;
}

interface Inputs {
  Email: string;
  Password: string;
  RepeatPassword: string;
}

const schema = yup
  .object({
    Email: yup
      .string()
      .email("Incorrect Email")
      .required("Email can`t be empty"),
    Password: yup.string().required("Password can`t be empty"),
    RepeatPassword: yup
      .string()
      .oneOf([yup.ref('Password'), null], 'Passwords must match')
      .required("Can`t be empty"),
  })
  .required();

const RegistrationForm = ({ activeTab, setActiveTab }: IRegisterForm) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit"
  });

  const dispatch = useDispatch()

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (info) => {
    try {
      const { data } = await axios.post(`${back_url}/auth/registration`, { email: info.Email, password: info.Password })
      dispatch(setUser(data.token))
      localStorage.setItem('token', data.token)
      router.push('/lk')
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <AnimatePresence>
      {activeTab == 1 && (
        <motion.div
          variants={FadeInMotion()}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={0}
          className={"RegisterWindow"}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.span variants={FadeInMotion(1)}>
              To register please input your Innopolis email and password.
            </motion.span>
            <motion.h3 variants={FadeInMotion(2)}>Welcome</motion.h3>
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
              <PasswordSvg />
              <input
                placeholder="Enter your password"
                {...register("Password", { required: true })}
                type="password"
              />
            </motion.div>

            <motion.div variants={FadeInMotion(5)} className="inputWrapper">
              {errors.RepeatPassword ? (
                <p className="errorLabel">{errors.RepeatPassword?.message}</p>
              ) : null}
              <PasswordSvg />
              <PasswordSvg />
              <input
                placeholder="Repeat your password"
                {...register("RepeatPassword", { required: true })}
                type="password"
              />
            </motion.div>
            <motion.button variants={FadeInMotion(6)} type="submit">
              Log In
            </motion.button>
            <motion.p variants={FadeInMotion(7)} className="switcher">
              Already registered?{" "}
              <span onClick={() => setActiveTab(0)}>Login.</span>
            </motion.p>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationForm;
