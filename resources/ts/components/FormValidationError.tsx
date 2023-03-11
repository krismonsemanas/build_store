import React from "react";
import { usePage } from "@inertiajs/react";
import NotificationBar from "./NotificationBar";

const FormValidationError = () => {
  const { errors } = usePage().props.errors;
  return (
    <NotificationBar color="danger">
      <b>Whoops! Something went wrong.</b>
    </NotificationBar>
  );
};

export default FormValidationError;
