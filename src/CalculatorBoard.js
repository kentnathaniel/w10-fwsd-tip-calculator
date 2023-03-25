import React, { useContext, useState, useCallback, useMemo, useRef } from "react";
import { Button, Text, TextField } from "./components";
import {
  Container,
  LeftContainer,
  RightContainer,
  ButtonContainer,
  PriceContainer,
} from "./_appStyle";

const quickTipValue = [5, 10, 15, 25, 50];

// Jenis2 State management: Context API, Redux, Zustand, Jotai, Valtio, Recoil
// useMemo: digunakan untuk me-memorized value
// useCallback: digunakan untuk me-memorized function

const CalculatorContext = React.createContext();

function Input() {
  const { bill, tip, people, changeBillHandler, changeTipHandler, setPeople } =
    useContext(CalculatorContext);
  const billFieldRef = useRef();

  // console.log(billFieldRef);

  return (
    <LeftContainer>
      <Text style={{ marginBottom: "6px" }}>Bill</Text>
      <TextField
        id="text-field-bill"
        ref={billFieldRef}
        style={{ marginBottom: "40px", width: "calc(100% - 32px)" }}
        placeholder={"0"}
        value={bill}
        type="number"
        onChange={(e) => changeBillHandler(e)}
      />
      <Text style={{ marginBottom: "16px" }}>Select Tip %</Text>
      <ButtonContainer>
        {quickTipValue.map((v, idx) => (
          <Button
            variant={v === tip ? "primary" : "secondary"}
            onClick={() => changeTipHandler(v)}
            key={idx}>
            {v}%
          </Button>
        ))}
        <TextField
          placeholder="Custom"
          style={{ width: "120px" }}
          type="number"
          onChange={(e) => changeTipHandler(e.target.value)}
        />
      </ButtonContainer>
      <Text style={{ marginBottom: "6px" }}>Number of People</Text>
      <TextField
        style={{ width: "calc(100% - 32px)" }}
        placeholder={"0"}
        type="number"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
      />
    </LeftContainer>
  );
}

function Output({ tipPerPerson, totalPerPerson, onReset }) {
  return (
    <RightContainer>
      <PriceContainer>
        <Text color="white">Tip amount/person</Text>
        <Text color="primary">$ {tipPerPerson}</Text>
      </PriceContainer>
      <PriceContainer>
        <Text color="white">Total/person</Text>
        <Text color="primary">$ {totalPerPerson}</Text>
      </PriceContainer>
      <Button width="100%" style={{ marginTop: "auto" }} onClick={() => onReset()}>
        RESET
      </Button>
    </RightContainer>
  );
}

function CalculatorBoard(props) {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const tipPerPerson = Number(!people ? 0 : ((bill * (tip / 100)) / people || 0).toFixed(2));

  // Kalo array kosong, dia cuma dipanggil ketika pertama kali mounting
  // const totalPerPerson = useMemo(() => {
  //   return Number(!people ? 0 : (bill / people || 0) + tipPerPerson).toFixed(2);
  // }, []);

  // Di memorized dengan menggunakan useMemo, jangan lupa return statement klo pake useMemo
  const totalPerPerson = useMemo(() => {
    return Number(!people ? 0 : (bill / people || 0) + tipPerPerson).toFixed(2);
  }, [people, bill, tipPerPerson]);

  const resetHandler = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  };

  // Di memorized dengan menggunakan callback
  const changeBillHandler = useCallback((e) => {
    setBill(Number(e.target.value));
  }, []);

  const changeTipHandler = (value) => {
    setTip(Number(value));
  };

  return (
    <CalculatorContext.Provider
      value={{
        bill,
        people,
        tip,
        changeBillHandler,
        setPeople,
        changeTipHandler,
      }}>
      <Container>
        <Input />
        <Output
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          onReset={resetHandler}
        />
      </Container>
    </CalculatorContext.Provider>
  );
}

export default CalculatorBoard;
