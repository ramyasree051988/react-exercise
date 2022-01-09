import { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  StyledTextField,
  StyledCheckbox,
  StyledLegendWrapper,
  StyledDiv,
} from "./styled";
import { Button } from "@cruk/cruk-react-components";
import * as yup from "yup";
import { retrieveAll } from "../../lib/retrieveAll";
import { ResultArea } from "../result-area";
import { getMediaQuery, isValidYear,isFutureYear } from "../../utils";

export const InputForm = () => {
  const formSchema = yup.object().shape({
    keywords: yup.string().required("Please Enter a Valid Keywords"),
    mediaType: yup.string().required("Please Enter a Valid Media Type"),
  });
  const [media, setMedia] = useState([]);
  const [buttonText, setButtonText] = useState("Submit");
  const [submitting, setSubmitting] = useState(false);
  return (
    <>
      <Formik
        validate={(values) => {
          const errors = {};
          if (values.startYear && !isValidYear(values.startYear)) {
            errors.startYear = "Enter a Valid year!";
          }
          if (values.startYear && isFutureYear(values.startYear)) {
            errors.startYear = "Please do not enter an year in future";
          }
          return errors;
        }}
        validateOnChange
        initialValues={{
          keywords: "",
          mediaType: "",
          startYear: "",
        }}
        validationSchema={formSchema}
        onSubmit={async ({ keywords, mediaType, startYear }) => {
          setMedia(null);
          setButtonText("Submiting...");
          setSubmitting(true);
          let data = await retrieveAll({
            q: keywords,
            media_type: mediaType,
            year_start: startYear,
          });
          setMedia(data);
          setButtonText("Submit");
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched }) => {
          return (
            <Form>
              <Field name="keywords">
                {({ field }) => (
                  <>
                    <StyledTextField
                      errorMessage={touched.keywords && errors.keywords}
                      label={"Keywords"}
                      type="text"
                      required
                      {...field}
                    />
                  </>
                )}
              </Field>
              <StyledDiv>
                <StyledLegendWrapper
                  name="mediaType"
                  errorMessage={touched.mediaType && errors.mediaType}
                  hintText={"Helps in filtering type of media you want to see"}
                  legendText={"Choose a media type"}
                >
                  <StyledCheckbox
                    onChange={function noRefCheck(event) {
                      values.mediaType = getMediaQuery(
                        values.mediaType,
                        event.target.checked,
                        event.target.value
                      );
                    }}
                    label="video"
                    value="video"
                  />
                  <StyledCheckbox
                    onChange={function noRefCheck(event) {
                      values.mediaType = getMediaQuery(
                        values.mediaType,
                        event.target.checked,
                        event.target.value
                      );
                    }}
                    label="image"
                    value="image"
                  />
                  <StyledCheckbox
                    onChange={function noRefCheck(event) {
                      values.mediaType = getMediaQuery(
                        values.mediaType,
                        event.target.checked,
                        event.target.value
                      );
                    }}
                    label="audio"
                    value="audio"
                  />
                </StyledLegendWrapper>
              </StyledDiv>
              <Field name="startYear">
                {({ field }) => (
                  <>
                    <StyledTextField
                      errorMessage={touched.startYear && errors.startYear}
                      label={"Start Year"}
                      type="text"
                      {...field}
                    />
                  </>
                )}
              </Field>{" "}
              <Button disabled={submitting} type="submit">
                {buttonText}
              </Button>
            </Form>
          );
        }}
      </Formik>
      <ResultArea media={media} />
    </>
  );
};
