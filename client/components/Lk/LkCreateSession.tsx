import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { days, months, years } from "../../services/DataGenerator";
import axios from "axios";
import {back_url} from "../../vars";
import {setIsFetch} from "./../../redux/slices/AppSlice"
import useTypedSelector from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

interface Inputs {
  TitleCourse: string;
  TitleSession: string;
}

const LkCreateSession = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    // resolver: yupResolver(schema)
  });

  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = {
        ...data,
        day: daySelect.current?.getValue()[0].value,
        month: monthSelect.current?.getValue()[0].value,
        year: yearSelect.current?.getValue()[0].value
      };
      const request = await axios.post(`${back_url}/session/`, { ...result })
      dispatch(setIsFetch(true))
      console.log(request)
    } catch (e) {
      console.log(e)
    }
  };

  const daySelect = useRef<any>(null);
  const monthSelect = useRef<any>(null);
  const yearSelect = useRef<any>(null);

  const DaysOptions = days();
  const MonthsOptions = months();
  const YearsOptions = years();

  return (
    <section className="LkCreateSession">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create session</h2>
          <input
            className="TitleInput"
            {...register("TitleCourse", { required: true })}
            placeholder="Title of the course"
            type="text"
          />
          <input
            className="TitleInput"
            {...register("TitleSession", { required: true })}
            placeholder="Title of the session"
            type="text"
          />
          <div className="SelectLine">
            <Select
              ref={daySelect}
              placeholder="Day"
              name="Day"
              options={DaysOptions}
            />
            <Select
              placeholder="Month"
              name="Month"
              className="Month"
              options={MonthsOptions}
              ref={monthSelect}
            />
            <Select
              placeholder="Year"
              name="Year"
              ref={yearSelect}
              className="Year"
              options={YearsOptions}
            />
          </div>
          <button>Create</button>
        </form>
      </div>
    </section>
  );
};

export default LkCreateSession;
