package com.easybuy.service.impl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayOpenPublicTemplateMessageIndustryModifyRequest;
import com.alipay.api.response.AlipayOpenPublicTemplateMessageIndustryModifyResponse;
import com.easybuy.service.AliPayService;

@Service	
public class AliPayServiceImpl implements AliPayService {

	@Value("${gatewayUrl}")
	private String gatewayUrl;

	@Value("${appId}")
	private String appId;

	@Value("${privateKey}")
	private String privateKey;

	@Value("${publicKey}")
	private String publicKey;

	@Value("${charset}")
	private String charset;

	@Value("${signType}")
	private String signType;
	
	public boolean aliPayFunction() {
		System.out.println("init");
		System.out.println(gatewayUrl+","+appId+","+ privateKey+","+ "json"+","+ charset+","+publicKey+","+signType);
		// 实例化客户端
		AlipayClient alipayClient = new DefaultAlipayClient(gatewayUrl, appId, privateKey, "json", charset, publicKey,
				signType);
		// 实例化具体API对应的request类,类名称和接口名称对应,当前调用接口名称：alipay.open.public.template.message.industry.modify
		System.out.println("new DefaultAlipayClient");
		AlipayOpenPublicTemplateMessageIndustryModifyRequest request = new AlipayOpenPublicTemplateMessageIndustryModifyRequest();
		System.out.println("request");
		// SDK已经封装掉了公共参数，这里只需要传入业务参数
		// 此次只是参数展示，未进行字符串转义，实际情况下请转义
		request.setBizContent("{" +
				"\"out_trade_no\":\"20150320010101001\"," +
				"\"seller_id\":\"2088102146225135\"," +
				"\"total_amount\":88.88," +
				"\"discountable_amount\":8.88," +
				"\"undiscountable_amount\":80," +
				"\"buyer_logon_id\":\"15901825620\"," +
				"\"subject\":\"Iphone6 16G\"," +
				"      \"goods_detail\":[{" +
				"        \"goods_id\":\"apple-01\"," +
				"\"alipay_goods_id\":\"20010001\"," +
				"\"goods_name\":\"ipad\"," +
				"\"quantity\":1," +
				"\"price\":2000," +
				"\"goods_category\":\"34543238\"," +
				"\"categories_tree\":\"124868003|126232002|126252004\"," +
				"\"body\":\"特价手机\"," +
				"\"show_url\":\"http://www.alipay.com/xxx.jpg\"" +
				"        }]," +
				"\"body\":\"Iphone6 16G\"," +
				"\"product_code\":\"FACE_TO_FACE_PAYMENT\"," +
				"\"operator_id\":\"yx_001\"," +
				"\"store_id\":\"NJ_001\"," +
				"\"disable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," +
				"\"enable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," +
				"\"terminal_id\":\"NJ_T_001\"," +
				"\"extend_params\":{" +
				"\"sys_service_provider_id\":\"2088511833207846\"," +
				"\"hb_fq_num\":\"3\"," +
				"\"hb_fq_seller_percent\":\"100\"," +
				"\"industry_reflux_info\":\"{\\\\\\\"scene_code\\\\\\\":\\\\\\\"metro_tradeorder\\\\\\\",\\\\\\\"channel\\\\\\\":\\\\\\\"xxxx\\\\\\\",\\\\\\\"scene_data\\\\\\\":{\\\\\\\"asset_name\\\\\\\":\\\\\\\"ALIPAY\\\\\\\"}}\"," +
				"\"card_type\":\"S0JP0000\"" +
				"    }," +
				"\"timeout_express\":\"90m\"," +
				"\"royalty_info\":{" +
				"\"royalty_type\":\"ROYALTY\"," +
				"        \"royalty_detail_infos\":[{" +
				"          \"serial_no\":1," +
				"\"trans_in_type\":\"userId\"," +
				"\"batch_no\":\"123\"," +
				"\"out_relation_id\":\"20131124001\"," +
				"\"trans_out_type\":\"userId\"," +
				"\"trans_out\":\"2088101126765726\"," +
				"\"trans_in\":\"2088101126708402\"," +
				"\"amount\":0.1," +
				"\"desc\":\"分账测试1\"," +
				"\"amount_percentage\":\"100\"" +
				"          }]" +
				"    }," +
				"\"settle_info\":{" +
				"        \"settle_detail_infos\":[{" +
				"          \"trans_in_type\":\"cardAliasNo\"," +
				"\"trans_in\":\"A0001\"," +
				"\"summary_dimension\":\"A0001\"," +
				"\"settle_entity_id\":\"2088xxxxx;ST_0001\"," +
				"\"settle_entity_type\":\"SecondMerchant、Store\"," +
				"\"amount\":0.1" +
				"          }]" +
				"    }," +
				"\"sub_merchant\":{" +
				"\"merchant_id\":\"19023454\"," +
				"\"merchant_type\":\"alipay: 支付宝分配的间连商户编号, merchant: 商户端的间连商户编号\"" +
				"    }," +
				"\"alipay_store_id\":\"2016052600077000000015640104\"," +
				"\"merchant_order_no\":\"20161008001\"," +
				"\"ext_user_info\":{" +
				"\"name\":\"李明\"," +
				"\"mobile\":\"16587658765\"," +
				"\"cert_type\":\"IDENTITY_CARD\"," +
				"\"cert_no\":\"362334768769238881\"," +
				"\"min_age\":\"18\"," +
				"\"fix_buyer\":\"F\"," +
				"\"need_check_info\":\"F\"" +
				"    }," +
				"\"business_params\":{" +
				"\"campus_card\":\"0000306634\"," +
				"\"card_type\":\"T0HK0000\"," +
				"\"actual_order_time\":\"2019-05-14 09:18:55\"" +
				"    }," +
				"\"qr_code_timeout_express\":\"90m\"" +
				"  }");
		System.out.println("to response");
		AlipayOpenPublicTemplateMessageIndustryModifyResponse response;
		System.out.println("response");
		try {
			System.out.println("ok");
			response = alipayClient.execute(request);
			// 调用成功，则处理业务逻辑
			System.out.println(response.hashCode());
			System.out.println(response.getMsg());
			if(response.isSuccess())
			{
				System.out.println("支付成功！");
				System.out.println("支付成功！");
				System.out.println("支付成功！");
				System.out.println("支付成功！");
				System.out.println("支付成功！");
				System.out.println("支付成功！");
				System.out.println("支付成功！");
				System.out.println("支付成功！");
				return true;
			}
		} catch (AlipayApiException e) {
			System.out.println("error");
			e.printStackTrace();
			return false;
		} finally {
			System.out.println("finally");
		}
		return false;
	}
}


//package com.easybuy.util;
//
//import org.springframework.boot.context.event.ApplicationStartedEvent;
//import org.springframework.context.ApplicationListener;
//import org.springframework.stereotype.Component;
//
//import AlipayProperties;
//
//@Component
//public class PropertiesListener implements ApplicationListener<ApplicationStartedEvent> {
//	@Override
//	public void onApplicationEvent(ApplicationStartedEvent event) {
//		AlipayProperties.loadProperties();
//	}
//}

//AlipayTradePayRequest request = new AlipayTradePayRequest();
//AlipayTradePayModel model = new AlipayTradePayModel();
//request.setBizModel(model);
//
//model.setOutTradeNo(System.currentTimeMillis()+"");
//model.setSubject("Iphone6 16G");
//model.setTotalAmount("0.01");
//model.setAuthCode("xxxxx");//沙箱钱包中的付款码
//model.setScene("bar_code");
//
//AlipayTradePayResponse response = null;
//try {
//  response = alipayClient.execute(request);
//  System.out.println(response.getBody());
//  System.out.println(response.getTradeNo());
//} catch (AlipayApiException e) {
//  e.printStackTrace();
//}