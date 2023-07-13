import React, { useMemo, useState } from 'react';
import { Button, Divider, Popover, Segmented } from 'antd';
import style from "../CSS/Popup.module.scss"
import { MenuOutlined} from '@ant-design/icons';





const text = <span style={{fontSize:"18px",fontWeight:"600"}}>Menu</span>;
const content = ()=>{
    return (
        <div id={style.popup}>
            <h4>Nav1</h4>
            <h4>Nav2</h4>
            <select name="" id="">
                <option value="">Nav3</option>
                <option value="">Nav3</option>
                <option value="">Nav3</option>
            </select>
            <br />
            <select name="" id="">
                <option value="">Nav4</option>
                <option value="">Nav4</option>
                <option value="">Nav4</option>
            </select>
            <h4>Nav5</h4>
            <h4>Nav6</h4>
            <h4>Nav7</h4>
            <h4>Nav8</h4>
        </div>
      );
}

const buttonWidth = 70;

const PopupButton = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const [show1,setShow] = useState(false)

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);

  return (
    <div id={style.popup}>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement="bottomLeft" title={text} content={content()} arrow={mergedArrow}>
          <Button 
            id={style.popupButn}
          >
                <MenuOutlined />
          </Button>
        </Popover>
      </div>
    </div>
  );
};

export default PopupButton;