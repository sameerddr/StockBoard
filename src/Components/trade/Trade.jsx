import React from "react";

import "./Trade.css";

export function Trade() {
  return (
    <>
      <header>
        <div className="header_div">
          <div className="banking_login_div">
            <div className="banking_stock_div">
              <a href="">Banking</a>
              <a href="">Stock Plans</a>
            </div>
            <div className="contactus_login_div">
              <a href="">
                <i class="fa-solid fa-users"></i>Refer a Friend
              </a>
              <a href="">
                <i class="fa-regular fa-circle-question"></i>Contact Us
              </a>
              <a href="">
                <i class="fa-solid fa-user"></i>LogIn
              </a>
            </div>
          </div>
          <nav>
            <div className="nav">
              <div className="logo_img_div">
                <img
                  src="https://cdn2.etrade.net/1/22060112050.0/aempros/content/dam/etrade/retail/en_US/images/global/logos/etrade-from-MS.svg"
                  alt="logo"
                />
              </div>
              <div className="links">
                <a href="">Account Types</a>
                <a href="">Investment Choices</a>
                <a href="">New to Investing</a>
                <a href="">Trading</a>
                <a href="">Pricing and Rates</a>
                <a href="">Insights</a>
                <a href="">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
              <div className="open_account_button_div">
                <button>Open an account</button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="main_container">
          <section>
            <div className="banner">
              <div className="banner_text_div">
                <h1>New to online investing</h1>
                <p>
                  With an easy-to-use website and friendly guidance, there’s no
                  need to feel overwhelmed. Before you know it, you’ll feel
                  right at home, investing with confidence at E*TRADE from
                  Morgan Stanley.
                </p>
              </div>
              <div className="banner_video_div">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oibWR9-Wrbk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>
          <section>
            <div className="buy_online_section_div">
              <h1 style={{ align: "center", fontSize: "40px", color: "white" }}>
                How to buy stock online
              </h1>
              <div className="stock_online_divs">
                <div className="stock_online_div">
                  <h1
                    style={{
                      align: "center",
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    1
                  </h1>
                  <h3>Open an account</h3>
                  <p>Apply online in just a few minutes</p>
                </div>
                <div className="stock_online_div">
                  <h1
                    style={{
                      align: "center",
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    2
                  </h1>
                  <h3>Put money in</h3>
                  <p>Add money to pay for the shares you want to buy</p>
                </div>
                <div className="stock_online_div">
                  <h1
                    style={{
                      align: "center",
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    3
                  </h1>
                  <h3>Pick an investment</h3>
                  <p>Use our free analyst research and investing tools</p>
                </div>
                <div className="stock_online_div">
                  <h1
                    style={{
                      align: "center",
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    4
                  </h1>
                  <h3>Place your trade</h3>
                  <p>Our intuitive website and mobile app will guide you</p>
                </div>
              </div>
              <button
                style={{
                  alignItems: "center",
                  backgroundColor: "blueviolet",
                  color: "white",
                  border: "none",
                  marginTop: "50px",
                }}
              >
                Explore
              </button>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="footer">
          <div className="links_div">
            <div className="about_div">
              <h2>About Us</h2>
              <p>
                <a href="">Company Overview</a>
              </p>
              <p>
                <a href="">Invester Relations</a>
              </p>
              <p>
                <a href="">Newsroom</a>
              </p>
              <p>
                <a href="">Careers</a>
              </p>
              <p>
                <a href="">Privacy</a>
              </p>
              <p>
                <a href="">About Our Ads</a>
              </p>
              <p>
                <a href="">Accessibility at E*TRADE</a>
              </p>
            </div>
            <div className="about_div">
              <h2>Service</h2>
              <p>
                <a href="">Contact Us</a>
              </p>
              <p>
                <a href="">FAQs</a>
              </p>
              <p>
                <a href="">Forms and Applications</a>
              </p>
              <p>
                <a href="">Financial Consultants</a>
              </p>
            </div>
            <div className="about_div">
              <h2>Quick Links</h2>
              <p>
                <a href="">Open An Account</a>
              </p>
              <p>
                <a href="">Find My Account</a>
              </p>
              <p>
                <a href="">Cash Management</a>
              </p>
              <p>
                <a href="">Stock Plans</a>
              </p>
              <p>
                <a href="">Executive Services</a>
              </p>
              <p>
                <a href="">Refer a Friend</a>
              </p>
              <p>
                <a href="">Security Center</a>
              </p>
              <p>
                <a href="">Site Map</a>
              </p>
            </div>
            <div className="about_div">
              <h2>Connect with Us</h2>
              <p>
                <a href="">
                  <i class="fa-solid fa-phone"></i>9999999999
                </a>
              </p>
              <p>
                <a href="">
                  <i class="fa-solid fa-location-pin"></i>Find a Branch
                </a>
              </p>
            </div>
          </div>
          <div className="text_div">
            <h2>PLEASE READ THE IMPORTANT DISCLOSURES BELOW.</h2>
            <h4>
              Banking products and services are provided by Morgan Stanley
              Private Bank, National Association, Member <a href="">FDIC</a>
            </h4>
            <p>
              Consolidation is not right for everyone, so you should carefully
              consider your options. Before deciding whether to retain assets in
              a retirement plan account through a former employer, roll them
              over to a qualified retirement plan account through a new employer
              (if one is available and rollovers are permitted), or roll them
              over to an IRA, an investor should consider all his or her options
              and the various factors including, but not limited to, the
              differences in investment options, fees and expenses, services,
              the exceptions to the early withdrawal penalties, protection from
              creditors and legal judgments, required minimum distributions, the
              tax treatment of employer stock (if held in the qualified
              retirement plan account), and the availability of plan loans
              (i.e., loans are not permitted from IRAs, and the availability of
              loans from a qualified retirement plan will depend on the terms of
              the plan). For additional information, view the{" "}
              <a href="">FINRA Website</a>
            </p>
            <p>
              Prior to investing in a managed portfolio, E*TRADE Capital
              Management will obtain important information about your financial
              situation and risk tolerances and provide you with a detailed
              investment proposal, investment advisory agreement, and wrap fee
              programs brochure. These documents contain important information
              that should be read carefully before enrolling in a managed
              account program. Please read the{" "}
              <a href="">E*TRADE Wrap Fee Programs Brochure</a> for more
              information on the advisory fee, rebalancing methodologies,
              portfolio management, affiliations, and services offered.
            </p>
            <p>
              Investing in securities involves risk, including possible loss of
              principal.
            </p>
            <p>
              <strong>
                Diversification and asset allocation strategies do not ensure
                profit or protect against loss in declining markets. Investments
                in securities and other instruments involve risk and will not
                always be profitable including loss of principal.
              </strong>
            </p>
            <p>
              <strong>
                E*TRADE sometimes provides its customers with cash credits or
                special offers related to the opening or funding of accounts or
                other activities. E*TRADE credits and offers may be subject to
                U.S. withholding taxes and reporting at retail value. Taxes
                related to these offers are the customer's responsibility.
                E*TRADE reserves the right to change the offer terms or
                terminate the offer at any time without notice.
              </strong>
            </p>
            <p>
              1. E*TRADE charges $0 commission for online US-listed stock, ETF,
              and options trades. Exclusions may apply and E*TRADE reserves the
              right to charge variable commission rates. The standard options
              contract fee is $0.65 per contract (or $0.50 per contract for
              customers who execute at least 30 stock, ETF, and options trades
              per quarter). The retail online $0 commission does not apply to
              Over-the-Counter (OTC), foreign stock transactions, large block
              transactions requiring special handling, transaction-fee mutual
              funds, futures, or fixed income investments. Service charges apply
              for trades placed through a broker ($25). Stock plan account
              transactions are subject to a separate commission schedule.
              Additional regulatory and exchange fees may apply. For more
              information about pricing, visit etrade.com/pricing.
            </p>
            <p>
              <strong>
                E*TRADE credits and offers may be subject to US withholding
                taxes and reporting at retail value. Taxes related to these
                credits and offer are the customer’s responsibility. Cash
                credits for Individual Retirement Accounts are treated as
                earnings for tax purposes. E*TRADE and its affiliates do not
                provide tax advice.
              </strong>
            </p>
            <p>
              Offer valid for new E*TRADE Securities customers opening one new
              eligible retirement or brokerage account by 12/31/2022 and funded
              within 60 days of account opening with $5,000 or more. Promo code
              'BONUS22'.
            </p>
            <p>
              New customer opening one account: These rules strictly apply to
              customers who are opening one new E*TRADE account, do not have an
              existing E*TRADE account and do not open any other new E*TRADE
              accounts for 60 days after enrollment in this offer. For other
              circumstances, please refer to the “Existing Customers or New
              Customers Opening More than One Account” disclosures below.
            </p>
            <p>
              Cash credits will be granted based on deposits of new funds or
              securities from external accounts made within 60 days of account
              opening, as follows: $5,000-$19,999 will receive $50;
              $20,000-$49,999 will receive $100; $50,000-$99,999 will receive
              $200; $100,000-$199,999 will receive $300; $200,000-$499,999 will
              receive $600; $500,000-$999,999 will receive $1,200;
              $1,000,000-$1,499,999 will receive $2,500; $1,500,000 or more will
              receive $3,500.
            </p>
            <p>
              Reward tiers under $200,000 ($5,000-$19,999; $20,000-$49,999;
              $50,000-$99,999; $100-000-$199,999) will be paid within seven
              business days following the expiration of the 60 day period.
              However, if you deposit $200,000 or more, you will receive a cash
              credit within seven business days, followed by any additional
              reward based on your fulfillment tier at the expiration of the 60
              day period. If you have deposited at least $200,000 in the new
              account, and you make subsequent deposits in that account to reach
              a higher tier, you will receive a second cash credit following the
              close of the 60 day window. For example, if you deposit $250,000,
              you will receive a cash credit of $600 within seven business days,
              then if you deposit an additional $300,000 into your new account,
              you will receive an additional cash credit of $600 at the end of
              the 60 day window for a total reward of $1,200. If you deposit
              between $200,000 and $1,499,999 in your new account, you will
              receive a cash credit in two transactions at the end of the 60 day
              window—depending on your initial funding amount. If you deposit
              $1,500,000 or more in your new account, you will receive two cash
              credits that will total $3,500 within seven business days. Cash
              credits will be paid to the account where the deposit is made.
            </p>
            <p>
              Existing customers or new customers opening more than one account
              are subject to different offer terms. Please click here to view
              offer terms. Offer rules for all participants: New funds or
              securities must be deposited or transferred within 60 days of
              enrollment in offer, be from accounts outside of E*TRADE, and
              remain in the account (minus any trading losses) for a minimum of
              twelve months or the cash credit(s) may be surrendered. For
              purposes of the value of a deposit, any securities transferred
              will be valued as of the closing price of the securities at market
              on the business day the deposit is received as reflected in
              transaction history. Removing any deposit or cash during the
              promotion period (60 days) may result in lower reward amount or
              loss of reward. Any assets transferred from Morgan Stanley
              accounts to E*TRADE are not considered to be from accounts outside
              of E*TRADE and may not be included for purposes of offer
              eligibility or reward amount calculations, at E*TRADE’s sole
              discretion.
            </p>
            <p>
              If you are attempting to enroll in this offer with a Joint
              Account, the primary account holder may have to fulfill at the
              tiers noted before the secondary account holder can enroll in this
              offer. If you experience any issues when attempting to enroll with
              a Joint Account, please contact us at 800-387-2331 and we will be
              able to assist you with your enrollment.
            </p>
            <p>
              Offer limitations: Offer valid for E*TRADE Securities brokerage,
              Coverdell, and the following types of E*TRADE retirement accounts:
              Traditional IRA, Individual 401(k), Roth Individual 401(k), Roth
              IRA, Rollover IRA, Beneficiary Roth IRA, and Beneficiary
              Traditional IRA
            </p>
            <p>
              This offer is not valid for any business (incorporated or
              unincorporated) accounts, other E*TRADE Securities retirement
              account types (SEP IRA, SIMPLE IRA, retirement accounts for
              minors, profit sharing plans, money purchase pension plans and
              investment only noncustodial retirement plans, Beneficiary IRA
              Estate, Beneficiary IRA Trust, Beneficiary Roth IRA Estate,
              Beneficiary Roth IRA Trust), E*TRADE Capital Management, E*TRADE
              Futures, and Morgan Stanley Private Bank, National Association
              accounts. Excludes non-U.S. residents, and residents of any
              jurisdiction where this offer is not valid. You must be the
              original recipient of this offer to enroll. Customers may only be
              enrolled in one offer at a time. Cannot be combined with any other
              offers.
            </p>
            <p>
              <strong>
              Consolidation is not right for everyone, so you should carefully consider your options. Before deciding whether to retain assets in a retirement plan account through a former employer, roll them over to a qualified retirement plan account through a new employer (if one is available and rollovers are permitted), or roll them over to an IRA, an investor should consider all his or her options and the various factors including, but not limited to, the differences in investment options, fees and expenses, services, the exceptions to the early withdrawal penalties, protection from creditors and legal judgments, required minimum distributions, the tax treatment of employer stock (if held in the qualified retirement plan account), and the availability of plan loans (i.e., loans are not permitted from IRAs, and the availability of loans from a qualified retirement plan will depend on the terms of the plan). For additional information, view the FINRA Website.
              </strong>
              </p>
              <p>
                <strong>
                If you have multiple IRAs at E*TRADE or at other financial institutions, the annual contribution limit applies to contributions made to all of your IRAs (traditional and Roth IRAs) combined which can impact your ability to make a contribution to an IRA for the current tax year.  Before making a contribution, check your other IRAs and refer to the Contribution Limits Table for more details.
                </strong>
              </p>
              <p>
                <strong>
                E*TRADE Securities LLC and its affiliates do not provide tax advice, and you should always consult your own tax advisor regarding your personal circumstances before taking any action that may have tax consequences.
                </strong>
              </p>
              <p>
              This offer neither is, nor should be construed as a recommendation or solicitation to buy, sell, or hold any security, financial product or instrument or to open a particular account or engage in any specific investment strategy.
              </p>
              <p>
                2. In Benzinga’s 2021 Global Fintech Awards, E*TRADE was named Best Brokerage for Beginners and Best Options App. The Benzinga Fintech list is an index of carefully-vetted companies & executives that are actively working to create positive and diverse changes in the financial services space. Learn more
              </p>
              <p>
                3. E*TRADE charges $0 commission for online US-listed stock, ETF, and options trades. Exclusions may apply and E*TRADE reserves the right to charge variable commission rates. The standard options contract fee is $0.65 per contract (or $0.50 per contract for customers who execute at least 30 stock, ETF, and options trades per quarter). The retail online $0 commission does not apply to Over-the-Counter (OTC), foreign stock transactions, large block transactions requiring special handling, transaction-fee mutual funds, futures, or fixed income investments. Service charges apply for trades placed through a broker ($25). Stock plan account transactions are subject to a separate commission schedule. Additional regulatory and exchange fees may apply. For more information about pricing, visit etrade.com/pricing.
              </p>
              <p>
                4. The Annual Advisory Fee is 0.30%, or as low as $1.50 for $500 in assets, and is the direct fee charged to any client in the advisory program. The advisory fee does not cover underlying management fees and expenses of any mutual fund or ETF investment held in the portfolio. 
              </p>
              <p>
              Securities products offered by E*TRADE Securities LLC (ETS), Member SIPC or Morgan Stanley Smith Barney LLC (MSSB), Member SIPC. Investment advisory services offered by E*TRADE Capital Management, LLC (ETCM) or MSSB. Commodity futures and options on futures products and services offered by E*TRADE Futures LLC, Member NFA. Stock plan administration solutions and services offered by E*TRADE Financial Corporate Services, Inc. Banking products and services are provided by Morgan Stanley Private Bank, National Association, Member FDIC. All entities are separate but affiliated subsidiaries of Morgan Stanley.
              </p>
          </div>
        </div>
      </footer>
    </>
  );
}
