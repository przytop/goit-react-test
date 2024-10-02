import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./FeedbackForm.module.css";

export default function FeedbackForm() {
  const initialValues = {
    username: "",
    email: "",
    message: "",
    level: "good",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .required("Required"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
  });

  return (
    <Formik
      initialValues={{ initialValues }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Username </label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage name="username">
          {(msg) => <span className={css.error}>{msg}</span>}
        </ErrorMessage>

        <label htmlFor={emailFieldId}> Email </label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage name="email">
          {(msg) => <span className={css.error}>{msg}</span>}
        </ErrorMessage>

        <label htmlFor={msgFieldId}> Message </label>
        <Field as="textarea" name="message" id={msgFieldId} rows="3" />
        <ErrorMessage name="message">
          {(msg) => <span className={css.error}>{msg}</span>}
        </ErrorMessage>

        <label htmlFor={levelFieldId}> Service satisfaction level </label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>
        <ErrorMessage name="level">
          {(msg) => <span className={css.error}>{msg}</span>}
        </ErrorMessage>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
