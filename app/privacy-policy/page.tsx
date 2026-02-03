export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">개인정보 수집 및 이용 동의</h1>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            법무법인 김앤파트너스 (이하 '회사')는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에
            관한 법률을 준수하고 있습니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을
            통하여 공지할 것입니다.
          </p>
          <p className="text-xs text-muted-foreground">본 방침은 2025년부터 시행됩니다.</p>

          <section>
            <h2 className="text-xl font-bold mb-3">수집하는 개인정보 항목</h2>
            <p className="mb-2">
              회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>수집항목 : 이름, 로그인ID, 비밀번호, 자택 전화번호, 자택 주소, 휴대전화번호, 접속 로그</li>
              <li>개인정보 수집방법 : 홈페이지(회원가입), 배송 요청</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">개인정보의 수집 및 이용목적</h2>
            <p className="mb-2">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산구매 및 요금 결제</li>
              <li>회원 관리 - 회원제 서비스 이용에 따른 본인확인</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">개인정보의 보유 및 이용기간</h2>
            <p className="mb-2">
              회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의
              정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
            </p>

            <div className="ml-4 space-y-2">
              <div>
                <h3 className="font-semibold">가. 회사 내부 방침에 의한 정보보유 사유</h3>
                <p>- 부정이용기록</p>
                <p className="ml-4">보존 이유 : 부정 이용 방지</p>
                <p className="ml-4">보존 기간 : 1년</p>
              </div>

              <div>
                <h3 className="font-semibold">나. 관련법령에 의한 정보보유 사유</h3>
                <p className="mb-2">
                  상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우
                  회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                </p>
                <ul className="space-y-1 ml-4">
                  <li>- 계약 또는 청약철회 등에 관한 기록 (전자상거래 등에서의 소비자보호에 관한 법률) : 5년</li>
                  <li>- 대금결제 및 재화 등의 공급에 관한 기록 (전자상거래 등에서의 소비자보호에 관한 법률) : 5년</li>
                  <li>- 전자금융 거래에 관한 기록 (전자금융거래법) : 5년</li>
                  <li>- 소비자의 불만 또는 분쟁처리에 관한 기록 (전자상거래 등에서의 소비자보호에 관한 법률) : 3년</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">개인정보의 파기절차 및 방법</h2>
            <p className="mb-2">
              회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.
            </p>

            <div className="ml-4 space-y-2">
              <div>
                <h3 className="font-semibold">파기절차</h3>
                <p>
                  회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련
                  법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기되어집니다.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">파기방법</h3>
                <ul className="space-y-1">
                  <li>
                    - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                  </li>
                  <li>- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">개인정보 제공</h2>
            <p className="mb-2">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>제품 배송 또는 설치 및 A/S에 필요로 하는 경우 (이름, 휴대전화번호, 설치지역 주소)</li>
              <li>이용자들이 사전에 동의한 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">개인정보관리책임자</h2>
            <p className="mb-2">
              회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이
              개인정보관리책임자를 지정하고 있습니다.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">개인정보관리책임자</p>
              <p>성 명 : 김민수</p>
              <p>전자우편 : knps@kimnpartners.co.kr</p>
              <p>전화번호 : 1577-1097</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">기타 문의</h2>
            <p className="mb-2">개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>개인분쟁조정위원회 (www.1336.or.kr/1336)</li>
              <li>정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)</li>
              <li>대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)</li>
              <li>경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
