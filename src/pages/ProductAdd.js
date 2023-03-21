import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import SdtTextInput from "../utilities/customFormControls/SdtTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün Adı Zorunlu"),
    unitPrice: Yup.number().required("Ürün Fiyatı Zorunlu"),
  });

  return (
    <div>
      <Formik 
            initialValues = { initialValues } 
            validationSchema = { schema }
            onSubmit={ (values) => {
                console.log(values)
            } }
      >
        <Form className="ui form">
            <SdtTextInput name="productName" placeholder="Ürün Adı" />
          {/* <FormField> //bunun yerine üsttekini yaptık!
            <Field name="productName" placeholder="Ürün Adı"></Field>
            <ErrorMessage name="productName" render={error=>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          
          <SdtTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
          <Button color="blue" type="submit">Kaydet</Button>
        </Form>
      </Formik>
    </div>
  );
}
