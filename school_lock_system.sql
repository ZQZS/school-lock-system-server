/*
 Navicat MariaDB Data Transfer

 Source Server         : mariadb_毕设
 Source Server Type    : MariaDB
 Source Server Version : 101102
 Source Host           : localhost:3306
 Source Schema         : school_lock_system

 Target Server Type    : MariaDB
 Target Server Version : 101102
 File Encoding         : 65001

 Date: 21/03/2023 15:07:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for init_book_time_setting
-- ----------------------------
DROP TABLE IF EXISTS `init_book_time_setting`;
CREATE TABLE `init_book_time_setting`  (
  `cells` int(11) NULL DEFAULT NULL COMMENT '一天分成多少个单位时间',
  `start_time` int(11) NULL DEFAULT NULL COMMENT '开始时间，单位：时',
  `cell_time` int(11) NULL DEFAULT NULL COMMENT '单位时间，单位：分',
  `early_open_time` int(11) NULL DEFAULT NULL COMMENT '最早提前开放的时间，提前n天预约'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of init_book_time_setting
-- ----------------------------
INSERT INTO `init_book_time_setting` VALUES (30, 8, 30, 7);

-- ----------------------------
-- Table structure for init_place_setting
-- ----------------------------
DROP TABLE IF EXISTS `init_place_setting`;
CREATE TABLE `init_place_setting`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `place_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `place_label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `place_introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `place_early_open_time` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `place_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of init_place_setting
-- ----------------------------
INSERT INTO `init_place_setting` VALUES (1, 'xzl2411', '行2-411', '2号行政楼4楼411房', '2号行政楼4楼411房，拥有办公桌，网线接口，黑板', 7);
INSERT INTO `init_place_setting` VALUES (3, 'xxl2101', '行2-101', '2号行政楼1楼101房', '2号行政楼1楼101房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (4, 'xxl2102', '行2-102', '2号行政楼1楼102房', '2号行政楼1楼102房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (5, 'xxl2103', '行2-103', '2号行政楼1楼103房', '2号行政楼1楼103房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (6, 'xxl2104', '行2-104', '2号行政楼1楼104房', '2号行政楼1楼104房，拥有办公桌，黑板', 7);
INSERT INTO `init_place_setting` VALUES (7, 'xxl2105', '行2-105', '2号行政楼1楼105房', '2号行政楼1楼105房，拥有办公桌，黑板', 7);
INSERT INTO `init_place_setting` VALUES (8, 'xxl2201', '行2-201', '2号行政楼2楼201房', '2号行政楼2楼201房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (9, 'xxl2202', '行2-202', '2号行政楼2楼202房', '2号行政楼2楼202房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (10, 'xxl2203', '行2-203', '2号行政楼2楼203房', '2号行政楼2楼203房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (11, 'xxl2204', '行2-204', '2号行政楼2楼204房', '2号行政楼2楼204房，拥有办公桌，黑板', 7);
INSERT INTO `init_place_setting` VALUES (12, 'xxl2205', '行2-205', '2号行政楼2楼205房', '2号行政楼2楼205房，拥有办公桌，黑板', 7);
INSERT INTO `init_place_setting` VALUES (13, 'xxl2301', '行2-301', '2号行政楼3楼301房', '2号行政楼3楼301房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (14, 'xxl2302', '行2-302', '2号行政楼3楼302房', '2号行政楼3楼302房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (15, 'xxl2303', '行2-303', '2号行政楼3楼303房', '2号行政楼3楼303房，拥有办公桌', 7);
INSERT INTO `init_place_setting` VALUES (16, 'xxl2304', '行2-304', '2号行政楼3楼304房', '2号行政楼3楼304房，拥有办公桌，黑板', 7);
INSERT INTO `init_place_setting` VALUES (17, 'xxl2305', '行2-305', '2号行政楼3楼305房', '2号行政楼3楼305房，拥有办公桌，黑板', 7);
INSERT INTO `init_place_setting` VALUES (18, 'xxl2401', '行2-401', '2号行政楼4楼401房', '2号行政楼4楼401房，拥有办公桌，网线接口', 7);
INSERT INTO `init_place_setting` VALUES (19, 'xxl2402', '行2-402', '2号行政楼4楼402房', '2号行政楼4楼402房，拥有办公桌，网线接口', 7);
INSERT INTO `init_place_setting` VALUES (20, 'xxl2403', '行2-403', '2号行政楼4楼403房', '2号行政楼4楼403房，拥有办公桌，网线接口', 7);
INSERT INTO `init_place_setting` VALUES (21, 'xxl2404', '行2-404', '2号行政楼4楼404房', '2号行政楼4楼404房，拥有办公桌，网线接口，黑板', 7);
INSERT INTO `init_place_setting` VALUES (22, 'xxl2405', '行2-405', '2号行政楼4楼405房', '2号行政楼4楼405房，拥有办公桌，网线接口，黑板', 7);
INSERT INTO `init_place_setting` VALUES (23, 'xxl2501', '行2-501', '2号行政楼5楼501房', '2号行政楼5楼501房，拥有办公桌，网线接口', 7);
INSERT INTO `init_place_setting` VALUES (24, 'xxl2502', '行2-502', '2号行政楼5楼502房', '2号行政楼5楼502房，拥有办公桌，网线接口', 7);
INSERT INTO `init_place_setting` VALUES (25, 'xxl2503', '行2-503', '2号行政楼5楼503房', '2号行政楼5楼503房，拥有办公桌，网线接口', 7);
INSERT INTO `init_place_setting` VALUES (26, 'xxl2504', '行2-504', '2号行政楼5楼504房', '2号行政楼5楼504房，拥有办公桌，网线接口，黑板', 7);
INSERT INTO `init_place_setting` VALUES (27, 'xxl2505', '行2-505', '2号行政楼5楼505房', '2号行政楼5楼505房，拥有办公桌，网线接口，黑板', 7);

-- ----------------------------
-- Table structure for init_power_role_setting
-- ----------------------------
DROP TABLE IF EXISTS `init_power_role_setting`;
CREATE TABLE `init_power_role_setting`  (
  `power` int(11) NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `hours` int(5) NULL DEFAULT NULL,
  `power_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`power`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of init_power_role_setting
-- ----------------------------
INSERT INTO `init_power_role_setting` VALUES (1, 'student', 20, '\"\"');
INSERT INTO `init_power_role_setting` VALUES (20, 'teacher', 40, '\"\"');
INSERT INTO `init_power_role_setting` VALUES (666, 'manger', 1000, '\"\"');

-- ----------------------------
-- Table structure for order_user_apply
-- ----------------------------
DROP TABLE IF EXISTS `order_user_apply`;
CREATE TABLE `order_user_apply`  (
  `order_id` int(1) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `order_place_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_user_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_time_start` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '1678669218291',
  `order_time_end` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '1678672818291',
  `order_place_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_state` int(2) NULL DEFAULT NULL COMMENT '\'已撤销\':0, \'审核中\':1，\'已通过\':3，\'已驳回\':4，\'已过期\':5 ',
  `order_apply_reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_reject_reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_rejecter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_ordering_time` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_last_updateing_time` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_user_apply
-- ----------------------------
INSERT INTO `order_user_apply` VALUES (27, 'xzl2411', '1920170176', '1679184000000', '1679209200000', NULL, 5, 'ces1', NULL, NULL, '1679157904509', '1679157904509');
INSERT INTO `order_user_apply` VALUES (28, 'xxl2101', '1920170176', '1679202000000', '1679203800000', NULL, 5, '厕所2', NULL, NULL, '1679191538346', '1679191538346');
INSERT INTO `order_user_apply` VALUES (29, 'xxl2101', '1920170176', '1679194800000', '1679198400000', NULL, 5, 'dasdaqdcs', NULL, NULL, '1679192905559', '1679192905559');
INSERT INTO `order_user_apply` VALUES (30, 'xxl2102', '1920170176', '1679194800000', '1679198400000', NULL, 5, 'ces12', NULL, NULL, '1679192924120', '1679192924120');
INSERT INTO `order_user_apply` VALUES (31, 'xxl2104', '1920170176', '1679194800000', '1679198400000', NULL, 5, 'dwqdsddq', NULL, NULL, '1679192936781', '1679192936781');
INSERT INTO `order_user_apply` VALUES (32, 'xzl2411', '1920170176', '1679230800000', '1679234400000', NULL, 5, 'ces1', NULL, NULL, '1679228451666', '1679228451666');
INSERT INTO `order_user_apply` VALUES (33, 'xzl2411', '1920170176', '1679274000000', '1679281200000', NULL, 5, 'ces1', NULL, NULL, '1679235604321', '1679235604321');
INSERT INTO `order_user_apply` VALUES (34, 'xzl2411', '1920170176', '1679302800000', '1679304600000', NULL, 5, 'd1231', NULL, NULL, '1679235619574', '1679235619574');
INSERT INTO `order_user_apply` VALUES (35, 'xzl2411', '1920170176', '1679443200000', '1679446800000', NULL, 1, 'd1e12dsad', NULL, NULL, '1679235633797', '1679235633797');
INSERT INTO `order_user_apply` VALUES (36, 'xzl2411', '1920170176', '1679313600000', '1679320800000', NULL, 5, 'cesae131', NULL, NULL, '1679235673829', '1679235673829');
INSERT INTO `order_user_apply` VALUES (37, 'xzl2411', '1920170176', '1679616000000', '1679630400000', NULL, 1, 'sad1d12', NULL, NULL, '1679235686461', '1679235686461');
INSERT INTO `order_user_apply` VALUES (38, 'xzl2411', '1920170176', '1679544000000', '1679571000000', NULL, 1, 'c1qsd1qwd', NULL, NULL, '1679235700874', '1679235700874');
INSERT INTO `order_user_apply` VALUES (39, 'xzl2411', '1920170176', '1679634000000', '1679641200000', NULL, 1, 'qwdqwd1daw', NULL, NULL, '1679235716637', '1679235716637');
INSERT INTO `order_user_apply` VALUES (40, 'xzl2411', '1920170176', '1679448600000', '1679450400000', NULL, 1, '测试', NULL, NULL, '1679333540138', '1679333540138');
INSERT INTO `order_user_apply` VALUES (41, 'xzl2411', '1920170176', '1679452200000', '1679454000000', NULL, 1, 'q', NULL, NULL, '1679334589357', '1679334589357');
INSERT INTO `order_user_apply` VALUES (42, 'xzl2411', '1920170176', '1679446800000', '1679448600000', NULL, 1, '测试', NULL, NULL, '1679371520638', '1679371520638');
INSERT INTO `order_user_apply` VALUES (43, 'xzl2411', '1920170176', '1679536800000', '1679540400000', NULL, 1, '测试2', NULL, NULL, '1679381793592', '1679381793592');
INSERT INTO `order_user_apply` VALUES (44, 'xxl2101', '1920170176', '1679630400000', '1679637600000', NULL, 1, '测试3', NULL, NULL, '1679381810781', '1679381810781');
INSERT INTO `order_user_apply` VALUES (45, 'xxl2101', '1920170176', '1679455800000', '1679461200000', NULL, 1, '测试', NULL, NULL, '1679382242973', '1679382242973');

-- ----------------------------
-- Table structure for place_order_user_number
-- ----------------------------
DROP TABLE IF EXISTS `place_order_user_number`;
CREATE TABLE `place_order_user_number`  (
  `place_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `year_and_month` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '2023-3',
  `ordered_user_number` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`place_id`, `year_and_month`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of place_order_user_number
-- ----------------------------
INSERT INTO `place_order_user_number` VALUES ('xxl2101', '2023-3', 4);
INSERT INTO `place_order_user_number` VALUES ('xxl2102', '2023-3', 1);
INSERT INTO `place_order_user_number` VALUES ('xxl2104', '2023-3', 1);
INSERT INTO `place_order_user_number` VALUES ('xzl2411', '2023-3', 13);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `user_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `user_power` int(1) NULL DEFAULT NULL COMMENT '权限组：1,300,500',
  PRIMARY KEY (`user_no`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1029650634', '後乎', '23981119807', 'ZGlal9', 1);
INSERT INTO `user` VALUES ('1103028541', '东郭悟', '26392450557', 'bD1G8l', 1);
INSERT INTO `user` VALUES ('121371233', '汝娟', '85081954870', 'yUiB9b', 1);
INSERT INTO `user` VALUES ('1303214795', '房安', '03664828512', 'eOH0DX', 1);
INSERT INTO `user` VALUES ('1531017207', '穆哲', '44566828849', 'bnw7fJ', 1);
INSERT INTO `user` VALUES ('1920170176', '丘炜业', '13413562514', '123456', 666);
INSERT INTO `user` VALUES ('2098975652', '闻人姿', '96226846113', 'DvJdzG', 1);
INSERT INTO `user` VALUES ('2165031913', '敖坦姿', '19003349227', 'qfAAv1', 1);
INSERT INTO `user` VALUES ('2192257670', '古迪', '77961486274', 'gjinEc', 1);
INSERT INTO `user` VALUES ('2607347804', '东门余', '44165377993', 'CbD3Dy', 1);
INSERT INTO `user` VALUES ('2670356101', '房书俊', '26751453229', 'lZq1zQ', 1);
INSERT INTO `user` VALUES ('2753715074', '章妩容', '48521328334', 'REJBP_', 1);
INSERT INTO `user` VALUES ('2769152877', '居晓', '93936721582', 'uTmn4N', 1);
INSERT INTO `user` VALUES ('27772195', '公羊俊华', '45742891440', 'qDPU4o', 1);
INSERT INTO `user` VALUES ('2914242095', '刁旺', '29244899412', 't46NJz', 1);
INSERT INTO `user` VALUES ('3062041571', '颜明', '98026141252', '_OTKL1', 1);
INSERT INTO `user` VALUES ('3111788950', '柳敦', '16071974503', 'AivaQd', 1);
INSERT INTO `user` VALUES ('3286769279', '富睿丰', '37905189766', 'bHN_ZB', 1);
INSERT INTO `user` VALUES ('3350109626', '晋良昌', '98458562954', 'hgoSV_', 1);
INSERT INTO `user` VALUES ('3668932129', '祝姣', '89963624519', 'JfQucg', 1);
INSERT INTO `user` VALUES ('37312624', '印思秀', '56260640524', 'tXItV_', 1);
INSERT INTO `user` VALUES ('3739681854', '蒙颖良', '62231044333', '0LyEap', 1);
INSERT INTO `user` VALUES ('3821165303', '融维石', '55950409739', 'IwKNRw', 1);
INSERT INTO `user` VALUES ('399942104', '井诚', '44640381315', 'McboGE', 1);
INSERT INTO `user` VALUES ('4016800002', '冀容', '35162785671', 'rH3yoJ', 1);
INSERT INTO `user` VALUES ('4590433874', '田文', '84009092401', '_wApKz', 1);
INSERT INTO `user` VALUES ('4626218543', '红盛挺', '14597891218', '6DleDG', 1);
INSERT INTO `user` VALUES ('4666148813', '公良兴', '70009594907', '2_2PHi', 1);
INSERT INTO `user` VALUES ('4770942546', '笪迪诚', '11589035627', 'F0FZBM', 1);
INSERT INTO `user` VALUES ('4842245278', '童晓维', '75769725737', 'EuhlC6', 1);
INSERT INTO `user` VALUES ('4867960986', '糜晓晰', '06618486029', 'Yz32Mn', 1);
INSERT INTO `user` VALUES ('4876239397', '厉勤', '45738325385', 'VwHQ_b', 1);
INSERT INTO `user` VALUES ('4946554070', '卢旺', '67340624459', 'Trv0xc', 1);
INSERT INTO `user` VALUES ('4973691827', '楚石丰', '78944688241', '1H7T1z', 1);
INSERT INTO `user` VALUES ('4994774187', '伯悟和', '02217201114', 'Fi_axd', 1);
INSERT INTO `user` VALUES ('5085160958', '廖显', '01898698889', 'x2ts92', 1);
INSERT INTO `user` VALUES ('5119501686', '凤锐', '81314444584', '_DROcE', 1);
INSERT INTO `user` VALUES ('5293205167', '项迪', '50385913079', 'hzPwNS', 1);
INSERT INTO `user` VALUES ('5402895919', '潘耀', '75013045991', 'kWH7ul', 1);
INSERT INTO `user` VALUES ('5625979628', '亢明', '73955345584', 'Hl4Tmz', 1);
INSERT INTO `user` VALUES ('5708612870', '南宫壮然', '84771142513', 'eOeeCb', 1);
INSERT INTO `user` VALUES ('5800447673', '闫文', '34844392018', 'R9TmDq', 1);
INSERT INTO `user` VALUES ('60449269', '利悉妯', '62145238497', 'HTmU6w', 1);
INSERT INTO `user` VALUES ('6064499532', '车灵', '75588153584', 'pkE2l_', 1);
INSERT INTO `user` VALUES ('6375671824', '微生颖', '40422514972', 'lDAkZs', 1);
INSERT INTO `user` VALUES ('6430446869', '双蔼', '01436067652', 'u9xsRX', 1);
INSERT INTO `user` VALUES ('6739039879', '桓贤贤', '01294767172', 'I7yisy', 1);
INSERT INTO `user` VALUES ('6841484739', '罗文', '83786801219', 'r0iHBo', 1);
INSERT INTO `user` VALUES ('6866028758', '莫勤', '24757348177', 'oNnsJZ', 1);
INSERT INTO `user` VALUES ('7020281291', '郜哲婷', '12012464575', '6p_wiR', 1);
INSERT INTO `user` VALUES ('7020429455', '年余', '17445145299', '_uy2XB', 1);
INSERT INTO `user` VALUES ('7100916340', '狄晓', '95884412830', 'VZlMMp', 1);
INSERT INTO `user` VALUES ('7149216869', '卞悟泰', '23638450062', 'rGeV9n', 1);
INSERT INTO `user` VALUES ('72051790', '从良', '52823351398', 'W49MYT', 1);
INSERT INTO `user` VALUES ('7273188748', '伍晓巍', '27853274786', 'KmSD1F', 1);
INSERT INTO `user` VALUES ('7335185577', '拓跋伦俊', '92909872192', 'qoGH5l', 1);
INSERT INTO `user` VALUES ('7461915013', '双盛', '93537151927', 'M1LjVN', 1);
INSERT INTO `user` VALUES ('748215264', '诸葛文兴', '47072192140', 'TpnC6s', 1);
INSERT INTO `user` VALUES ('7516240658', '干焕', '04713176463', 'PsAAJf', 1);
INSERT INTO `user` VALUES ('7604479557', '单伦和', '12362082356', '90WpAt', 1);
INSERT INTO `user` VALUES ('770270715', '祝兴', '54336168834', 'hoLx39', 1);
INSERT INTO `user` VALUES ('7895825253', '宇文兰武', '99327141064', '5gKbB4', 1);
INSERT INTO `user` VALUES ('7901783785', '丁倩焕', '02924181594', '_DwfeJ', 1);
INSERT INTO `user` VALUES ('803962574', '羊达', '36931315768', 'I4bBpH', 1);
INSERT INTO `user` VALUES ('8045677630', '曹蔼', '18333586829', 'CsePgZ', 1);
INSERT INTO `user` VALUES ('8198670329', '宋妩康', '23292018815', 'A0s00Y', 1);
INSERT INTO `user` VALUES ('8221229094', '简伟', '42766175781', 'mqK_tB', 1);
INSERT INTO `user` VALUES ('8341164161', '慎容', '42867674933', 'pBTC5e', 1);
INSERT INTO `user` VALUES ('8453582370', '唐颖宁', '35307358804', 'r7ZIiu', 1);
INSERT INTO `user` VALUES ('8532889735', '师松', '00250920684', '_H_Zva', 1);
INSERT INTO `user` VALUES ('8558065024', '姚蔼悉', '78755264348', '9mLx5h', 1);
INSERT INTO `user` VALUES ('8632956884', '督文', '21893924526', 'X1fJRq', 1);
INSERT INTO `user` VALUES ('8917808415', '申婉兰', '08484103739', 'EpFO_k', 1);
INSERT INTO `user` VALUES ('9361125805', '闻人维然', '48712458916', 'Jxp5WE', 1);
INSERT INTO `user` VALUES ('936504600', '宁颖', '26294961231', 'PCZ_pI', 1);
INSERT INTO `user` VALUES ('9395995916', '谈通通', '95186132079', 'WTV2fu', 1);
INSERT INTO `user` VALUES ('9421227465', '段干泰清', '87385689112', 'CXaHdG', 1);
INSERT INTO `user` VALUES ('963365564', '单于直', '79263155899', '_QohYh', 1);
INSERT INTO `user` VALUES ('9917776421', '公冶雄', '77622730397', 'U8Rkmv', 1);
INSERT INTO `user` VALUES ('9948375337', '卜道', '56661801813', 'AaZoTj', 1);
INSERT INTO `user` VALUES ('9999964856', '邴通泰', '12645327494', 'Adl_ge', 1);

-- ----------------------------
-- Table structure for user_action
-- ----------------------------
DROP TABLE IF EXISTS `user_action`;
CREATE TABLE `user_action`  (
  `user_no` int(11) NOT NULL,
  `click_action` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `time` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `user_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_no`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_action
-- ----------------------------

-- ----------------------------
-- Table structure for user_session
-- ----------------------------
DROP TABLE IF EXISTS `user_session`;
CREATE TABLE `user_session`  (
  `user_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `session` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `over_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_no`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_session
-- ----------------------------
INSERT INTO `user_session` VALUES ('1920170176', 'ie1qi7a_6FIe5eVYAQ1PLk_jf6HGAwXO', '1679976299405');

-- ----------------------------
-- Table structure for user_used_order_time
-- ----------------------------
DROP TABLE IF EXISTS `user_used_order_time`;
CREATE TABLE `user_used_order_time`  (
  `user_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `year_and_month` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '2023-3',
  `used_time` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`user_no`, `year_and_month`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_used_order_time
-- ----------------------------
INSERT INTO `user_used_order_time` VALUES ('1920170176', '2023-3', 28);

SET FOREIGN_KEY_CHECKS = 1;
