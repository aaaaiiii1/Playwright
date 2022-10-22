Feature: Chai page

  Scenario Outline: Test chai page
    Given tôi vào trang "https://platform-qa-5.unifimoney.net/login"
    Then tôi xác nhận rằng page có title "Log in"
    And tôi nhập vào ô cellphone <cphone> và ô password <pass>
    And tôi chọn giới tính là <gender> năm <yrs> món chai yêu thích <favchai> và lý do <reason>
    And tôi chọn quốc tịch <continent> và commands <command>
    And tôi click vào nut submit
    Then tôi xác nhận chữ trên page đã đổi thành "We're pasionate about tea."

    Examples: 
      | cphone     | pass         | gender | yrs | favchai | reason             | continent | command       |
      | 8320003188 | 123456789aA@ | Female |   6 | Red Tea | Harmless Addiction | Europe    | Wait Commands |
