Feature: Chai page

  Scenario Outline: Test chai page
    Given tôi vào trang "http://www.practiceselenium.com/practise-form.html"
    Then tôi xác nhận rằng page có title "Practice Form"
    And tôi nhập vào ô firstname <fname> và ô lastname <lname>
    And tôi chọn giới tính là <gender> năm <yrs> món chai yêu thích <favchai> và lý do <reason>
    And tôi chọn quốc tịch <continent> và commands <command>
    And tôi click vào nut submit
    Then tôi xác nhận chữ trên page đã đổi thành "We're pasionate about tea."

    Examples: 
      | fname | lname  | gender | yrs | favchai | reason             | continent | command       |
      | Emma  | watson | Female |   6 | Red Tea | Harmless Addiction | Europe    | Wait Commands |
