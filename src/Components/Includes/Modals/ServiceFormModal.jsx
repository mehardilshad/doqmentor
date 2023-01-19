import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import Header from '../../Screens/Header'

// images
// import tick from "../../assets/images/techies/tick.svg";

// Components
// import CountrySelector from "../includes/CountrySelector";
// import round from "../../assets/images/rounded-arrow.svg";
// import ApplicationSuccessModal from "../includes/modal/ApplicationSuccessModal";
// import { manageConfig } from "../../axiosConfig";

function ServiceFormModal() {
  const [name, setName] = useState('')
  const [contactName, setContactName] = useState('')
  const [mobile, setMobile] = useState('')
  const [validNumber, setValidNumber] = useState(false)
  const [mail, setMail] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  const [constituencyName, setConstituencyName] = useState('')
  const [selectedConstituency, setSelectedConstituency] = useState('')
  const [constituency, setConstituencies] = useState([])
  const [constituencyStatus, setConstituencyStatus] = useState(false)
  const [constituencyModal, setConstituencyModal] = useState(false)

  const [districts, setDistricts] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [districtName, setDistrictName] = useState('')
  const [distListModal, setDistListModal] = useState(false)
  const [districtStatus, setDistrictStatus] = useState(false)

  const [institution, setInstitution] = useState([])
  const [institutionStatus, setInstitutionStatus] = useState(false)

  const [countryselector, setCountryselector] = useState(false)
  const [isError, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('This field is required')
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [phoneErrorMessage, setPhoneErrorMessage] = useState(
    'This field is required',
  )
  const [isMailError, setMailError] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [institutionHovered, setInstitutionHovered] = useState(false)
  const [institutions, setInstitutions] = useState([])
  const [selectedInstitutions, setSelectedInstitutions] = useState([])

  let referralCode = localStorage.getItem('referral_code')
  referralCode = JSON.parse(referralCode)
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  //   error message timeout function
  useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 3000)
  }, [isError])

  //validating phone-number
  const onNumberChange = (e) => {
    const re = /^[A-Za-z0-9]+$/
    setValidNumber(false)
    if (e.target.value === '' || re.test(e.target.value)) {
      setMobile(e.target.value.replace('e' && '.', ''))
    }
  }

  const handleNumberError = () => {
    if (!mobile) {
      setError(true)
      setPhoneErrorMessage('This field is required')
    } else if (mobile.length < 10 || mobile.length > 10) {
      setError(true)
      setPhoneErrorMessage('Invalid phone number')
    } else {
      setError(false)
      setPhoneErrorMessage('')
    }
  }

  const validate = (e) => {
    window.addEventListener(
      'keydown',
      function (e) {
        if (['ArrowUp', 'ArrowDown'].indexOf(e.code) > -1) {
          e.preventDefault()
        }
      },
      false,
    )
  }

  // outside click closing function
  function ConstituencyOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setConstituencyModal(false)
          setConstituencyStatus(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const ConstituencyRef = useRef(null)
  ConstituencyOutsideClick(ConstituencyRef)

  // outside click closing function
  function IntitutionOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // setInstitutionModal(false);
          setInstitutionStatus(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const institutionRef = useRef(null)
  IntitutionOutsideClick(institutionRef)

  // outside click closing function
  function DistrictOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDistListModal(false)
          setDistrictStatus(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const districtRef = useRef(null)
  DistrictOutsideClick(districtRef)

  // -----------( fetching Assembly Constituencies Districts ) ---------
  //   useEffect(() => {
  //     const getAssembly = () => {
  //       manageConfig
  //         .get("technology-schools/get/district/")
  //         .then((response) => {
  //           const { data, StatusCode } = response.data;
  //           if (StatusCode === 6000) {
  //             setDistricts(data.data);
  //           } else if (StatusCode === 6001) {
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };
  //     getAssembly();
  //   }, []);

  // ----( Fetching institution inside list ) ----
  //   useEffect(() => {
  //     manageConfig
  //       .get("technology-schools/get/institution/")
  //       .then((response) => {
  //         const { StatusCode, data } = response.data;
  //         if (StatusCode === 6000) {
  //           if (data.data.length) {
  //             data.data.forEach((element) => {
  //               element.isSelected = false;
  //             });
  //           }
  //           setInstitutions(data.data);
  //         } else if (StatusCode === 6001) {
  //           console.log("error");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  // ----( Fetching Constituency lists ) ----
  //   useEffect(() => {
  //     districtName !== "" &&
  //       manageConfig
  //         .get(`technology-schools/assembly/constituencies/${selectedDistrict}/`)
  //         .then((response) => {
  //           const { StatusCode, data } = response.data;
  //           if (StatusCode === 6000) {
  //             setConstituencies(data.data);
  //           } else if (StatusCode === 6001) {
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //   }, [districtName]);

  const resetValues = () => {
    setName('')
    setSelectedConstituency('')
    setConstituencyName('')
    setDistrictName('')
    setInstitution([])
    setContactName('')
    setMail('')
    setMobile('')
    setValidNumber(false)
    setError(false)
    setMailError(false)
    setSelectedConstituency([])
    setSelectedInstitutions([])
    let newinstitutions = institutions.map((item) => (item.isSelected = false))
    setInstitution(newinstitutions)
  }

  // email validation
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }

  // form submitting api
  //   const renderSubmit = async (e) => {
  //     handleNumberError();
  //     if (!validateEmail(mail) && mail !== "") {
  //       setMailError(true);
  //       setEmailErrorMessage("Invalid mail");
  //     } else {
  //       setMailError(false);
  //       setEmailErrorMessage("");
  //     }
  //     e.preventDefault();
  //     setLoading(true);
  //     setError(true);

  //     if (
  //       validateEmail(mail) ||
  //       (mail === "" &&
  //         name !== "" &&
  //         selectedConstituency !== "" &&
  //         institution !== "" &&
  //         contactName !== "" &&
  //         mobile !== "" &&
  //         selectedCountry !== "" &&
  //         districtName !== "")
  //     ) {
  //       const formData = new FormData();

  //       formData.append("campus_name", name);
  //       formData.append("assembly_constituency", selectedConstituency);
  //       formData.append("assembly_constituency", selectedConstituency);
  //       formData.append("institutions", JSON.stringify(selectedInstitutions));
  //       formData.append("contact_person_name", contactName);
  //       formData.append("email", mail);
  //       formData.append("phone", mobile);
  //       formData.append("country", selectedCountry.web_code);
  //       formData.append("district", districtName);
  //       formData.append("referral_code", referralCode && referralCode);

  //       manageConfig
  //         .post("technology-schools/add/technology-school-assosiation/", formData)
  //         .then((response) => {
  //           let { StatusCode, data } = response.data;
  //           if (StatusCode === 6000) {
  //             setLoading(false);
  //             setSuccessModal(true);
  //           } else if (StatusCode === 6001) {
  //             setError(true);
  //             setSuccessModal(false);
  //             if (
  //               response.data.data.message ===
  //               "Entered number is not a valid phone number"
  //             ) {
  //               setValidNumber(true);
  //             }
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } else {
  //       setLoading(false);
  //       setError(true);
  //     }
  //   };

  useEffect(() => {
    const newArray = institutions
      .filter((item) => item.isSelected)
      .map((filteredItem) => filteredItem.id)
    setSelectedInstitutions(newArray)
  }, [institutions])

  useEffect(() => {
    setTimeout(() => {
      setMailError(false)
      setEmailErrorMessage('')
      resetValues()
    }, 3000)
  }, [isMailError])

  return (
    <>
      <Header />
      <FormSection
        onDragStart={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        <section className="wrapper">
          <H5>
            <b>Service application form</b>
          </H5>
          <Description>please complete the below form</Description>
          <Form>
            <LeftForm>
              <InputDiv>
                <TextInput
                  type="text"
                  placeholder="Enter your full name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
                <Label htmlFor="name">Name*</Label>
                <ErrorMessage
                  className={
                    isError === true && name === '' ? 'error-active' : ''
                  }
                >
                  {errorMessage}
                </ErrorMessage>
              </InputDiv>

              <InputDiv>
                <TextInput
                  type="text"
                  placeholder="Enter your Address"
                  id="name"
                />
                <Label htmlFor="name">Address*</Label>
                <ErrorMessage
                  className={
                    isError === true && name === '' ? 'error-active' : ''
                  }
                >
                  {errorMessage}
                </ErrorMessage>
              </InputDiv>

              <InputDiv>
                <TextInput
                  type="email"
                  placeholder="Enter email address"
                  id="mail"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value)
                  }}
                />
                <Label htmlFor="mail">Email Address (optional)</Label>
                <ErrorMessage className={isMailError ? 'error-active' : ''}>
                  {emailErrorMessage}
                </ErrorMessage>
              </InputDiv>
            </LeftForm>

            <RightForm>
              <InputDiv>
                <TextInput
                  type="numbner"
                  placeholder="Enter your phone number"
                  id="name"
                  onChange={(e) => {
                    setContactName(e.target.value)
                  }}
                />
                <Label>Number*</Label>
                <ErrorMessage
                  className={
                    isError === true && contactName === '' ? 'error-active' : ''
                  }
                >
                  {errorMessage}
                </ErrorMessage>
              </InputDiv>

              <NumberDiv>
                <NumberInput type="file" />
                <Label>submit required documents*</Label>
                <ErrorMessage
                  className={isError === true ? 'error-active' : ''}
                >
                  {phoneErrorMessage}
                </ErrorMessage>
                <ErrorMessage
                  className={
                    isError === true && validNumber === true
                      ? 'error-active'
                      : ''
                  }
                ></ErrorMessage>
              </NumberDiv>

              <Submit>Submit</Submit>
            </RightForm>
          </Form>
        </section>
      </FormSection>
    </>
  )
}

const InstitutionErrorMessageWrapper = styled.div`
  position: relative;
  margin-bottom: 48px;
  margin-top: 12px;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  @media all and (max-width: 910px) {
    gap: 6px;
  }
  @media all and (max-width: 480px) {
    gap: 2px;
  }
  @media all and (max-width: 360px) {
    justify-content: space-between;
  }
`
const FormSection = styled.section`
  background-color: #fff;
  padding: 160px 0 40px 0;
  /* min-height: 100vh; */
  & .wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 0 50px;
    @media all and (max-width: 1080px) {
      padding: 0 30px;
    }
    @media all and (max-width: 980px) {
      padding: 0;
    }
    @media all and (max-width: 640px) {
      width: 70%;
    }
  }

  @media all and (max-width: 480px) {
    padding: 100px 0 50px;
  }
  @media all and (max-width: 1280px) {
  }
`
const H5 = styled.h5`
  font-size: 20px;
  text-align: center;
  width: 80%;
  margin: 0 auto 26px;
  color: #01a9fe;
  @media all and (max-width: 480px) {
    margin: 0 auto 15px;
  }
  & b {
    color: #01a9fe;
    font-size: 34px;
    font-weight: 500;
    width: 500px;
    display: inline-block;
    position: relative;
    @media all and (max-width: 768px) {
      width: 460px;
      font-size: 30px;
    }
    @media all and (max-width: 640px) {
      font-size: 28px;
      width: 310px;
    }
    @media all and (max-width: 480px) {
      font-size: 26px;
      width: 270px;
    }
    @media all and (max-width: 360px) {
      font-size: 24px;
      width: 230px;
    }
    &::before {
      content: '';
      background-repeat: no-repeat;
      background-size: cover;
      width: 70px;
      height: 70px;
      position: absolute;
      right: -58px;
      top: 0px;
      bottom: 10px;
      @media all and (max-width: 640px) {
        width: 70px;
        height: 60px;
        right: -25px;
      }
      @media all and (max-width: 480px) {
        width: 60px;
        height: 60px;
        right: -25px;
        top: -5px;
      }
      @media all and (max-width: 360px) {
        width: 50px;
        height: 50px;
        right: -30px;
        top: -5px;
      }
    }
  }

  @media all and (max-width: 640px) {
    font-size: 28px;
  }
  @media all and (max-width: 480px) {
    font-size: 26px;
  }
`
const Description = styled.div`
  font-size: 17px;
  text-align: center;
  position: relative;
  width: 470px;
  margin: 20px auto 66px;
  line-height: 1.6rem;
  color: #6b6b6b;
  @media all and (max-width: 765px) {
    margin: 10px auto 45px;
  }
  @media all and (max-width: 640px) {
    font-size: 14px;
    width: 388px;
  }
  @media all and (max-width: 460px) {
    font-size: 14px;
    width: 320px;
  }
  @media all and (max-width: 360px) {
    font-size: 14px;
    width: 270px;
  }
`
const Form = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap; */

  & input::placeholder {
    font-family: 'gordita_regular';
  }
`
const LeftForm = styled.div`
  width: 60%;
  margin: 0 auto;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`
const RightForm = styled.div`
  width: 60%;
  margin: 0 auto;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`
const InputDiv = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
  margin-bottom: 50px;
  border-radius: 10px;

  @media all and (max-width: 765px) {
    width: 100%;
    height: 55px;
    margin-bottom: 75px;
  }
  @media all and (max-width: 640px) {
    width: 100%;
    height: 55px;
  }
  @media all and (max-width: 480px) {
    margin-bottom: 40px;
  }
  @media all and (max-width: 360px) {
    height: 47px;
  }
`
const TextInput = styled.input`
  border: 2px solid #e6e6e6;
  border-radius: 10px !important;
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 15px;
  font-family: 'gordita_regular';
  color: #494a4a;

  user-select: none !important; /* Standard syntax */

  ::placeholder {
    color: #afafaf;
  }
  &:focus {
    border: 2px solid #0fa76f;
    border-radius: 10px;
  }
  &:hover {
    border: 2px solid #01a9fe;
    border-radius: 10px;
  }
  @media all and (max-width: 768px) {
    padding: 0 15px;
  }
  @media all and (max-width: 640px) {
    font-size: 15px;
  }
  @media all and (max-width: 360px) {
    font-size: 14px;
    border: 1px solid #e6e6e6;
    &:hover {
      border: 1px solid #0fa76f;
      border-radius: 10px;
    }
  }
`
const NumberInput = styled.input`
  width: calc(100% - 100px);
  height: 100%;
  font-size: 16px;
  font-family: 'gordita_Regular';

  @media all and (max-width: 640px) {
    font-size: 15px;
  }
  @media all and (max-width: 360px) {
    font-size: 14px;
  }
`
const Label = styled.label`
  position: absolute;
  top: -30px;
  left: 0;
  font-size: 15px;
  color: #6b6b6b;
  margin-bottom: 10px;
  @media all and (max-width: 480px) {
    font-size: 13px;
  }
`
const NumberDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 2px solid #e6e6e6;
  border-radius: 10px !important;
  background-color: #fff;
  width: 100%;
  height: 57px;
  padding: 15px;
  margin-bottom: 50px;
  text-decoration: none;
  &:focus-within {
    border: 2px solid #0fa76f;
  }
  &:hover {
    border: 2px solid #01a9fe;
    border-radius: 10px;
  }

  @media all and (max-width: 765px) {
    width: 100%;
    height: 55px;
  }
  @media all and (max-width: 640px) {
    width: 100%;
    height: 55px;
  }
  @media all and (max-width: 480px) {
    margin-bottom: 40px;
  }
  @media all and (max-width: 360px) {
    font-size: 14px;
    border: 1px solid #e6e6e6;
    &:hover {
      border: 1px solid #0fa76f;
      border-radius: 10px;
    }
  }
`

const Arrow = styled.div`
  width: 8px;
  transform: rotate(90deg);
  transition: all 0.4s ease;

  & img {
    width: 100%;
    display: block;
  }

  &.modal-active {
    transform: rotate(-90deg);
  }
  &.active {
    transform: rotate(-90deg);
  }
`

const Submit = styled.div`
  background-color: #01a9fe;
  width: 35%;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-family: 'gordita_medium';
  cursor: pointer;
  height: 20px;
  margin: 0 auto;
  font-weight: 600;
    border: 2px solid #01a9fe;

  &:hover {
    color: #01a9fe;
    border: 2px solid #01a9fe;
    background: #fff;
  }
  @media all and (max-width: 980px) {
    height: 15px;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 640px) {
    font-size: 15px;
    width: 50%;
  }
  @media all and (max-width: 480px) {
    font-size: 14px;
    width: 70%;
  }
`
const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  display: none;
  text-align: right;
  position: absolute;
  bottom: -22px;
  right: 0;

  &.error-active {
    display: block;
  }

  &.institution-inside {
    bottom: 0;
    display: ${(props) => (props.isError ? 'block' : '')};
  }

  &.assembly-constitution-error-message {
    bottom: -53px;
    right: -12px;
  }
`
const GraduationStatus = styled.div`
  margin-bottom: 50px;
  border-radius: 10px;
  height: 57px;
  background: #fff;
  border: 2px solid #d9d9d9;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #9e9e9e;
  font-size: 16px;
  padding: 0 15px;
  font-family: 'gordita_regular';
  &.district {
    color: #000;
  }
  &.mb0 {
    margin-bottom: 12px;
  }
  &:hover {
    border: 2px solid #0fa76f;
  }
  @media all and (max-width: 1280px) {
    max-height: 57px;
    min-height: 57px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    max-height: 55px;
    min-height: 55px;
  }

  @media all and (max-width: 480px) {
    width: 100%;
    margin-bottom: 50px;
    font-size: 15px;
  }
  @media all and (max-width: 360px) {
    font-size: 14px;
    border: 1px solid #e6e6e6;
    min-height: 47px;
    max-height: 47px;
    margin-bottom: 40px;
    &:hover {
      border: 1px solid #0fa76f;
      border-radius: 10px;
    }
  }
`
const GraduationStatusDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0;
  position: relative;
  color: #afafaf;
  transition: 0.3s ease-in-out;
  &.text {
    color: #494a4a;
  }
`
const ModalContainer = styled.div`
  position: absolute;
  top: 58px;
  left: 0;
  width: 100%;
  z-index: 111;
  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.4s ease;

  &.active {
    transform: scaleY(1);
  }
`
const SubContainer = styled.div`
  background: rgb(255 255 255);
  border: 1px solid #e1e1e1;
  border-radius: 7px;
  padding: 0px;
  overflow-y: scroll;
  border-radius: 8px;
  height: 200px;
  &::-webkit-scrollbar {
    display: none;
  }
`
const List = styled.div``
const GradContainer = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  cursor: pointer;
  color: #000;
  font-family: gordita_regular;

  &.active {
    color: rgb(66, 200, 112);
    background-color: #f0fff4;
  }
  :hover {
    background-color: #f0fff4;
  }
  @media all and (max-width: 480px) {
    font-size: 15px;
  }
`
const GradCheckContainer = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  cursor: pointer;
  color: #000;
  font-family: gordita_regular;
  &.active {
    color: rgb(66, 200, 112);
    background-color: #f0fff4;
  }
  @media all and (max-width: 480px) {
    font-size: 15px;
  }
  @media all and (max-width: 360px) {
    padding: 12px 6px;
  }
`
const Checked = styled.img`
  width: 17px;
`

export default ServiceFormModal
