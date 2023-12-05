import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { Usesettings } from "./Usesettings";
import { UseUpdateSetting } from "./useUpdateSetting";

export function UpdateSettingsForm() {
  const {
    isLoading,
    setting: {
      maxBookingLength,
      minBookingLength,
      maxGuestesPer,
      breakfastPrice,
    } = {},
    error,
  } = Usesettings();
  const { isUpdating, updateSetting } = UseUpdateSetting();
  if (isLoading) <Spinner />;

  function handlerblur(e, field) {
    const { value } = e.target;
    console.log(value);
    if (!e) return;
    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handlerblur(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handlerblur(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestesPer}
          disabled={isUpdating}
          onBlur={(e) => handlerblur(e, "maxGuestesPer")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handlerblur(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}
