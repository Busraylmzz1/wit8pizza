import {
    Button, Card, CardBody, CardText, CardTitle, Col, Form, FormGroup, Input, InputGroup, Label, Row 
} from 'reactstrap';
import styled from 'styled-components';
import { useEffect,useState } from 'react';
import './OrderForm.css';
import { sizes, doughOptions, ingredients } from '../../data/optionsData';

import{menuPrices, pizzaSizePrices, doughOptionsPrices,ingredientsPrice } from '../../data/priceData';
import axios
 from 'axios';
 import {useNavigate} from 'react-router-dom';
 

 const MainLabel = styled (Label)`
 font-size:1.2rem;
 font-weight:600;
 `;

 const InputLabel = styled (Label)`
 color: var(--grey-light-color);
 font-weight:500;
 margin-left: 1rem;
 `;


 const LabelSpan = styled.span`
 color: var(--red-color);
`;

const RadioGroup = styled(FormGroup)`
 margin-top: 1rem;
`;

const CustomGroup = styled(FormGroup)`
 margin-top: 3rem !important;
`;

const CheckboxGrid = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 gap: 20px 50px;
`;

const Divider = styled.div`
 height: 2px;
 background-color: var(--grey-light-color);
 margin: 2rem 0;
 opacity: 30%;
`;

const CustomButton = styled(Button)`
font-weight: 600;
 font-size: 1.2rem;
 padding: 1rem;
 flex: 1;
 border-radius: 5px;
 background-color: var(--yellow-color);
 color: var(--grey-dark-color);
 
`;

const CardTextDiv = styled.div`
 display: flex;
 justify-content: space-between;
 font-weight: 600;
`;

const CardTextOuterDiv = styled.div`
 font-weight: 600;
`;

const CustomInput = styled(Input)`
 text-align: center;
 font-weight: 600;
 font-size: 1.2rem;
`;

export default function OrderForm() {
 const [formData, setFormData] = useState({
   food: 'PositionPizza',
   size: sizes[0].value,
   dough: doughTypes[0].value,
   extras: [],
   fullName: '',
   note: '',
 });

 const [quantity, setQuantity] = useState(1);

 const [error, setError] = useState(true);

 const navigate = useNavigate();

 useEffect(() => {
   validateForm();
 }, [formData]);

 function handleChange(e) {
   const { name, value, type, checked } = e.target;

   if (type === 'checkbox') {
     if (checked) {
       setFormData({
         ...formData,
         extras: [...formData.extras, value],
       });
     } else {
       setFormData({
         ...formData,
         extras: formData.extras.filter((topping) => topping !== value), //
       });
     }
   } else {
     setFormData({
       ...formData,
       [name]: value,
     });
   }
 }

 function validateForm() {
   if (formData.extras.length < 4 || formData.extras.length > 10) {
     setError(true);
   } else if (formData.fullName.length < 3) {
     setError(true);
   } else {
     setError(false);
   }
 }

 function increaseQuantity() {
   setQuantity((prevQuantity) => prevQuantity + 1);
 }

 function decreaseQuantity() {
   setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
 }

 function handleSubmit(e) {
   e.preventDefault();
   axios
     .post('https://reqres.in/api/orderedpizzas', formData)
     .then((res) => {
       console.log(res.data);
       navigate('/success');
     })
     .catch((err) => {
       console.error(err);
       console.log('hataburada', err);
     });
 }

 function calculatePrice() {
   let totalPrice = 0;

   totalPrice =
     (foodPrices[formData.food] +
       pizzaSizePrices[formData.size] +
       doughTypePrices[formData.dough] +
       formData.extras.length * ingredientPrice) *
     quantity;

   return totalPrice.toFixed(2);
 }

 return (
   <section className="form-section">
     <div className="form-content formpage-container">
       <Form onSubmit={handleSubmit}>
         <Row>
           <Col md={6}>
             <CustomGroup>
               <MainLabel for="size">
                 Boyut Seç <LabelSpan>*</LabelSpan>
               </MainLabel>
               {sizes.map((size, index) => (
                 <RadioGroup check key={index}>
                   <Input
                     id="size"
                     name="size"
                     type="radio"
                     value={size.value}
                     onChange={handleChange}
                     checked={formData.size === size.value}
                   />
                   <InputLabel check>{size.label}</InputLabel>
                 </RadioGroup>
               ))}
             </CustomGroup>
           </Col>
           <Col md={6}>
             <CustomGroup>
               <MainLabel for="dough">
                 Hamur seç <LabelSpan>*</LabelSpan>
               </MainLabel>
               <Input
                 onChange={handleChange}
                 id="dough"
                 name="dough"
                 type="select"
                 value={formData.dough}
               >
                 {doughTypes.map((dough, index) => (
                   <option key={index} value={dough.value}>
                     {dough.label}
                   </option>
                 ))}
               </Input>
             </CustomGroup>
           </Col>
         </Row>
         <Row>
           <Col>
             <CustomGroup>
               <MainLabel for="dough">
                 Ek Malzemeler <LabelSpan>*</LabelSpan>
               </MainLabel>
               <p
                 style={{
                   color: 'var(--grey-light-color)',
                   marginBottom: '2rem',
                 }}
               >
                 en fazla 10 malzeme seçebilirsiniz.
               </p>
               <CheckboxGrid>
                 {toppings.map((topping, index) => (
                   <FormGroup check key={index}>
                     <Input
                       onChange={handleChange}
                       type="checkbox"
                       name={topping.name}
                       value={topping.name}
                     />
                     <Label check>{topping.name}</Label>
                   </FormGroup>
                 ))}
               </CheckboxGrid>
             </CustomGroup>
           </Col>
         </Row>
         <CustomGroup>
           <MainLabel for="fullName">
             Ad Soyad <LabelSpan>*</LabelSpan>
           </MainLabel>
           <Input
             id="fullName"
             name="fullName"
             placeholder="Minimum 3 harf olmak üzere lütfen ad soyadınızı girin"
             type="text"
             onChange={handleChange}
           />
         </CustomGroup>
         <CustomGroup>
           <MainLabel for="note">Sipariş Notu</MainLabel>
           <Input
             id="note"
             name="note"
             placeholder="Siparişine eklemek istediğin bir not var mı?"
             type="textarea"
             onChange={handleChange}
           />
         </CustomGroup>
         <Divider />
         <Row>
           <Col md={4}>
             <InputGroup>
               <CustomButton onClick={decreaseQuantity}>-</CustomButton>
               <CustomInput
                 value={quantity}
                 readOnly
                 style={{ padding: '1rem' }}
               />
               <CustomButton onClick={increaseQuantity}>+</CustomButton>
             </InputGroup>
           </Col>
           <Col md={8}>
             <Card>
               <CardBody style={{ padding: '2rem' }}>
                 <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                 <CardTextOuterDiv className="mt-4">
                   <CardTextDiv style={{ color: 'var(--grey-light-color)' }}>
                     <span>Seçimler</span>
                     <span>
                       {(formData.extras.length * ingredientPrice).toFixed(2)}₺
                     </span>
                   </CardTextDiv>
                   <CardTextDiv style={{ color: 'var(--red-color)' }}>
                     <span>Toplam</span>
                     <span>{calculatePrice()}₺</span>
                   </CardTextDiv>
                 </CardTextOuterDiv>
               </CardBody>
               <CustomButton disabled={error}>Sipariş Ver</CustomButton>
             </Card>
           </Col>
         </Row>
       </Form>
       <ToastContainer />
     </div>
   </section>
 );
}