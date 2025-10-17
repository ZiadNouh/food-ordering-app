import { InputTypes } from "@/constants/enums";

import { IFormField } from "@/types/app";

import TextField from "@/components/form-fields/text-field";
import PasswordField from "@/components/form-fields/password-field";
import { ValidationErrors } from "@/validations/auth";
import Checkbox from "@/components/form-fields/checkbox";

interface Props extends IFormField {
  error: ValidationErrors;
  label: string;
}

const FormFields = (props: Props) => {
  const { type } = props;
  const renderField = (): React.ReactNode => {
    if (type === InputTypes.EMAIL || type === InputTypes.TEXT) {
      return <TextField {...props} />;
    }

    if (type === InputTypes.PASSWORD) {
      return <PasswordField {...props} />;
    }

    if (type === InputTypes.CHECKBOX) {
      return <Checkbox checked={false} {...props} />;
    }

    return <TextField {...props} />;
  };

  return <>{renderField()}</>;
};

export default FormFields;
