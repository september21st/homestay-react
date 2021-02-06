import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AdminHouseInfo from './AdminHouseInfo';
import DetailMap from './DetailMap';
import DetailPhotos from './DetailPhotos';
import HouseName from './HouseName';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function AdminHouseDetail({match,history}) {
  const{num}=match.params;
  const detailnum=num.split("=")[1];
  const handleConfirm = async () => {
    try {
      const url=`http://localhost:9003/homestays/admin/${num}/approve`
      console.log(url);
      const response = await axios.patch(
        url
      ).then(res=>{console.log(res)});
     
       history.push(`/admin/host/list?currentPage=1`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeny = async () => {
    try {
     
      console.log(num);
      const response = await axios.patch(
        `http://localhost:9003/homestays/admin/${num}/deny`
      );
      history.push(`/admin/host/list?currentPage=1`);
    } catch (e) {
      console.log(e);
    }
  };

    return (
        <div>
           
            {/* header */}
            {/* HouseName -> AdminHouseName 으로 custom을 하였으나 custom시 HouseName이  최종본이 아니였음 수정필요 */}
            {/* 집이름,즐겨찾기,별점 */}
            <HouseName />
                <Button variant="contained" size="small" onClick={handleConfirm}>
                승인
                </Button>
                 <Button variant="contained" color="secondary" onClick={handleDeny}>
                거절
                </Button>
            {/* 사진 DetailPhotos */}
            <DetailPhotos />

             {/* DetailInfoReservation */}
             <AdminHouseInfo />

            {/* DetailMap */}
            <DetailMap />
            
            {/* Footer */}
        </div>
    );
}

export default AdminHouseDetail;