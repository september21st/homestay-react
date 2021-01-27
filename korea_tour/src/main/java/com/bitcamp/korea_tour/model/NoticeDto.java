package com.bitcamp.korea_tour.model;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("notice")
public class NoticeDto {
   private int noticeNum;
   private String title;
   private String content;
   private Timestamp writeDay;
   private int views;
}