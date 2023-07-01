import styled from 'styled-components';
import CheckIcon from '../assets/icons/checkbox.svg';
import unCheckIcon from '../assets/icons/checkbox-outline.svg';

interface CheckBoxProps {
  /**
   체크박스 고유 아이디
  */
  id?: string;
  /**
   * 체크박스 크기
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 체크박스 라벨
   */
  label?: string;
  /**
   * 체크박스 클릭시 이벤트
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CheckBox = ({
  id = "checkbox",
  size = 'medium',
  label = "",
  ...props
}: CheckBoxProps) => {

  return (
    <Wrap>
      <Input id={id} type="checkbox" {...props} />
      <Label htmlFor={id}>{label}</Label>
    </Wrap>
  );
};

const Wrap = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ label:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.625 1.875H4.375C3.71218 1.87572 3.07672 2.13935 2.60803 2.60803C2.13935 3.07672 1.87572 3.71218 1.875 4.375V15.625C1.87572 16.2878 2.13935 16.9233 2.60803 17.392C3.07672 17.8607 3.71218 18.1243 4.375 18.125H15.625C16.2878 18.1243 16.9233 17.8607 17.392 17.392C17.8607 16.9233 18.1243 16.2878 18.125 15.625V4.375C18.1243 3.71218 17.8607 3.07672 17.392 2.60803C16.9233 2.13935 16.2878 1.87572 15.625 1.875ZM14.2285 7.27695L8.97852 13.527C8.92093 13.5955 8.84927 13.651 8.76839 13.6894C8.68752 13.7279 8.59932 13.7486 8.50977 13.75H8.49922C8.41162 13.75 8.325 13.7315 8.24499 13.6959C8.16497 13.6602 8.09335 13.6081 8.03477 13.543L5.78477 11.043C5.72762 10.9824 5.68317 10.9109 5.65403 10.8329C5.62488 10.7549 5.61163 10.6718 5.61504 10.5886C5.61846 10.5054 5.63848 10.4237 5.67392 10.3483C5.70936 10.2729 5.75952 10.2054 5.82143 10.1496C5.88335 10.0939 5.95578 10.0511 6.03447 10.0238C6.11315 9.99648 6.19651 9.98516 6.27963 9.99051C6.36276 9.99585 6.44398 10.0178 6.51851 10.0549C6.59305 10.0921 6.6594 10.1438 6.71367 10.207L8.48281 12.1727L13.2715 6.47305C13.3789 6.34886 13.5309 6.27193 13.6945 6.25889C13.8582 6.24584 14.0205 6.29774 14.1462 6.40335C14.2719 6.50896 14.351 6.6598 14.3664 6.82327C14.3818 6.98675 14.3323 7.14971 14.2285 7.27695Z' fill='%23051B2C'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
  }
`

const Label = styled.label`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  transition: 0.1s;
  cursor: pointer;

  &:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.75 6.875L8.5 13.125L6.25 10.625' stroke='%23051B2C' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.625 2.5H4.375C3.33947 2.5 2.5 3.33947 2.5 4.375V15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625V4.375C17.5 3.33947 16.6605 2.5 15.625 2.5Z' stroke='%23051B2C' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
  }
`