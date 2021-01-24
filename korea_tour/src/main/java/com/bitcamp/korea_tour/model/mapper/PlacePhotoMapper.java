package com.bitcamp.korea_tour.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bitcamp.korea_tour.model.PlacePhotoDto;

@Mapper
public interface PlacePhotoMapper {
	
	void insertData(PlacePhotoDto dto);
	void deleteData(int photoNum);
	List<PlacePhotoDto> getDisapprovedDatas();
	void approvePhoto(int photoNum);
}
