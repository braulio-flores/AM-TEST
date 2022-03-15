import { shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import ModalForm from "../../../components/modals/ModalForm";
import "../../../setupTest";
import { store } from "../../../store/store";

describe("Pruebas en <ModalsForm /> para agregar personaje", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <ModalForm />
    </Provider>
  );
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de actualizar el valor dein input en el onchange", () => {
    // const inputNombre = wrapper.find('input[name="nombre"]');
    // inputNombre.simulate('change');
  });
});
