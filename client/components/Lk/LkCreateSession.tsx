import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { days, months, years } from "../../services/DataGenerator";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const result = {
      ...data,
      day: monthSelect.current?.getValue()[0].value,
      month: monthSelect.current?.getValue()[0].value,
      year: monthSelect.current?.getValue()[0].value
    };
    console.log(result);
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
