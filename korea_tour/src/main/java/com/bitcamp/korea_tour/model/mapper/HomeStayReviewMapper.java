package com.bitcamp.korea_tour.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bitcamp.korea_tour.model.homestay.JoinHomeStayReviewDto;

@Mapper
public interface HomeStayReviewMapper {
		List<JoinHomeStayReviewDto> getAllReview(int homeStayNum);
}
