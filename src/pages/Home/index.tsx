import { FC, useCallback } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { useToast } from '../../hooks/toast';
import { Container } from './styles';
import { Assistant } from '../../components/Assistant';

const Home: FC = () => {
  const { addToast } = useToast();

  const handleCallChat = () => {
    console.log('teste');
  };
  const handleAddToast = useCallback(() => {
    setTimeout(() => {
      addToast({
        title: 'Information',
        type: 'info',
        description: 'infoo1..',
      });
    }, 1000);
    addToast({
      title: 'Information',
      type: 'info',
      description: 'infoo..',
    });
  }, [addToast]);
  return (
    <>
      <Container>
        <div className="content">
          <div className="wrapper-left">
            <svg
              className="logo"
              width="125"
              height="42"
              viewBox="0 0 125 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.584 7.88H11.664V10.664H5.232V13.76H11.04V16.52H5.232V20.216H11.736V23H1.584V7.88ZM14.1705 12.488C14.8265 12.104 15.5625 11.8 16.3785 11.576C17.2105 11.336 18.0585 11.216 18.9225 11.216C20.3465 11.216 21.4905 11.56 22.3545 12.248C23.2185 12.936 23.6505 14.032 23.6505 15.536V23H20.9385L20.6265 21.848H20.5305C20.2105 22.264 19.7625 22.608 19.1865 22.88C18.6265 23.136 17.9625 23.264 17.1945 23.264C16.5385 23.264 15.9625 23.168 15.4665 22.976C14.9865 22.784 14.5865 22.528 14.2665 22.208C13.9465 21.888 13.6985 21.512 13.5225 21.08C13.3625 20.632 13.2825 20.16 13.2825 19.664C13.2825 18.992 13.4265 18.416 13.7145 17.936C14.0185 17.456 14.4185 17.064 14.9145 16.76C15.4265 16.456 16.0185 16.232 16.6905 16.088C17.3785 15.944 18.1065 15.872 18.8745 15.872H20.0745V15.248C20.0745 14.816 19.9225 14.488 19.6185 14.264C19.3145 14.024 18.8825 13.904 18.3225 13.904C17.8425 13.904 17.3705 13.976 16.9065 14.12C16.4425 14.264 15.9305 14.496 15.3705 14.816L14.1705 12.488ZM20.0985 18.032L19.3065 18.056C18.8585 18.072 18.4825 18.12 18.1785 18.2C17.8745 18.28 17.6265 18.384 17.4345 18.512C17.2585 18.624 17.1305 18.768 17.0505 18.944C16.9705 19.104 16.9305 19.272 16.9305 19.448C16.9305 19.944 17.0745 20.288 17.3625 20.48C17.6665 20.656 18.0105 20.744 18.3945 20.744C18.7785 20.744 19.1225 20.632 19.4265 20.408C19.7465 20.184 19.9705 19.936 20.0985 19.664V18.032ZM33.5741 14.432C33.1421 14.224 32.6861 14.064 32.2061 13.952C31.7261 13.824 31.2621 13.76 30.8141 13.76C30.3981 13.76 30.0621 13.832 29.8061 13.976C29.5501 14.12 29.4221 14.32 29.4221 14.576C29.4221 14.848 29.5421 15.08 29.7821 15.272C30.0381 15.448 30.5341 15.64 31.2701 15.848L31.9901 16.064C32.9501 16.352 33.6781 16.776 34.1741 17.336C34.6701 17.88 34.9181 18.584 34.9181 19.448C34.9181 20.024 34.7981 20.552 34.5581 21.032C34.3181 21.496 33.9741 21.896 33.5261 22.232C33.0941 22.568 32.5661 22.824 31.9421 23C31.3341 23.176 30.6541 23.264 29.9021 23.264C29.0861 23.264 28.3581 23.192 27.7181 23.048C27.0941 22.904 26.5101 22.696 25.9661 22.424L26.7341 19.856C27.1981 20.096 27.6781 20.296 28.1741 20.456C28.6861 20.6 29.2061 20.672 29.7341 20.672C30.3421 20.672 30.7661 20.584 31.0061 20.408C31.2621 20.232 31.3901 20.024 31.3901 19.784C31.3901 19.64 31.3581 19.52 31.2941 19.424C31.2461 19.312 31.1501 19.208 31.0061 19.112C30.8621 19.016 30.6541 18.928 30.3821 18.848C30.1261 18.752 29.7901 18.64 29.3741 18.512L28.6301 18.296C27.6861 17.992 26.9981 17.576 26.5661 17.048C26.1341 16.504 25.9181 15.776 25.9181 14.864C25.9181 14.336 26.0221 13.856 26.2301 13.424C26.4381 12.976 26.7341 12.592 27.1181 12.272C27.5181 11.936 27.9981 11.68 28.5581 11.504C29.1341 11.312 29.7901 11.216 30.5261 11.216C31.2621 11.216 31.9421 11.288 32.5661 11.432C33.2061 11.56 33.7821 11.744 34.2941 11.984L33.5741 14.432ZM35.9102 11.48H39.7982L41.6942 16.616L42.4622 19.424H42.5582L43.2782 16.568L44.9342 11.48H48.5582L44.4062 23.216C44.1822 23.872 43.9182 24.512 43.6142 25.136C43.3102 25.76 42.9342 26.344 42.4862 26.888C42.0542 27.432 41.5262 27.928 40.9022 28.376C40.2782 28.824 39.5262 29.192 38.6462 29.48L37.1822 26.72C38.1262 26.384 38.9022 25.904 39.5102 25.28C40.1342 24.656 40.5502 23.936 40.7582 23.12L40.8062 22.928L35.9102 11.48ZM71.1339 7.88V10.712H67.0059V23H63.3579V10.712H59.3259V7.88H71.1339ZM72.267 23V11.48H75.051L75.411 13.496C75.555 13.208 75.731 12.928 75.939 12.656C76.147 12.368 76.395 12.12 76.683 11.912C76.971 11.704 77.299 11.536 77.667 11.408C78.051 11.28 78.475 11.216 78.939 11.216C79.291 11.216 79.611 11.264 79.899 11.36C80.203 11.44 80.443 11.536 80.619 11.648L80.043 14.408C79.867 14.312 79.643 14.224 79.371 14.144C79.099 14.064 78.763 14.024 78.363 14.024C77.627 14.024 77.011 14.264 76.515 14.744C76.035 15.224 75.795 16.056 75.795 17.24V23H72.267ZM81.6471 12.488C82.3031 12.104 83.0391 11.8 83.8551 11.576C84.6871 11.336 85.5351 11.216 86.3991 11.216C87.8231 11.216 88.9671 11.56 89.8311 12.248C90.6951 12.936 91.1271 14.032 91.1271 15.536V23H88.4151L88.1031 21.848H88.0071C87.6871 22.264 87.2391 22.608 86.6631 22.88C86.1031 23.136 85.4391 23.264 84.6711 23.264C84.0151 23.264 83.4391 23.168 82.9431 22.976C82.4631 22.784 82.0631 22.528 81.7431 22.208C81.4231 21.888 81.1751 21.512 80.9991 21.08C80.8391 20.632 80.7591 20.16 80.7591 19.664C80.7591 18.992 80.9031 18.416 81.1911 17.936C81.4951 17.456 81.8951 17.064 82.3911 16.76C82.9031 16.456 83.4951 16.232 84.1671 16.088C84.8551 15.944 85.5831 15.872 86.3511 15.872H87.5511V15.248C87.5511 14.816 87.3991 14.488 87.0951 14.264C86.7911 14.024 86.3591 13.904 85.7991 13.904C85.3191 13.904 84.8471 13.976 84.3831 14.12C83.9191 14.264 83.4071 14.496 82.8471 14.816L81.6471 12.488ZM87.5751 18.032L86.7831 18.056C86.3351 18.072 85.9591 18.12 85.6551 18.2C85.3511 18.28 85.1031 18.384 84.9111 18.512C84.7351 18.624 84.6071 18.768 84.5271 18.944C84.4471 19.104 84.4071 19.272 84.4071 19.448C84.4071 19.944 84.5511 20.288 84.8391 20.48C85.1431 20.656 85.4871 20.744 85.8711 20.744C86.2551 20.744 86.5991 20.632 86.9031 20.408C87.2231 20.184 87.4471 19.936 87.5751 19.664V18.032ZM100.747 11.48H104.515L100.483 23H96.2591L92.4191 11.48H96.2111L97.6031 16.52L98.3951 20.528H98.4911L99.2831 16.52L100.747 11.48ZM116.268 18.272H108.828V18.368C108.828 19.168 109.14 19.752 109.764 20.12C110.388 20.488 111.172 20.672 112.116 20.672C112.772 20.672 113.348 20.608 113.844 20.48C114.34 20.352 114.756 20.2 115.092 20.024L115.74 22.472C115.308 22.68 114.756 22.864 114.084 23.024C113.428 23.184 112.62 23.264 111.66 23.264C110.796 23.264 109.972 23.152 109.188 22.928C108.42 22.688 107.74 22.328 107.148 21.848C106.572 21.368 106.108 20.76 105.756 20.024C105.42 19.288 105.252 18.408 105.252 17.384C105.252 16.472 105.388 15.64 105.66 14.888C105.948 14.12 106.348 13.464 106.86 12.92C107.372 12.376 107.98 11.96 108.684 11.672C109.404 11.368 110.196 11.216 111.06 11.216C112.644 11.216 113.908 11.696 114.852 12.656C115.796 13.616 116.268 14.984 116.268 16.76V18.272ZM112.644 15.848C112.644 15.576 112.612 15.312 112.548 15.056C112.484 14.8 112.38 14.576 112.236 14.384C112.108 14.176 111.932 14.016 111.708 13.904C111.5 13.776 111.244 13.712 110.94 13.712C110.38 13.712 109.916 13.912 109.548 14.312C109.18 14.696 108.964 15.224 108.9 15.896L112.644 15.848ZM118.534 23V5.84H122.038V23H118.534Z"
                fill="#FDFDFE"
              />
              <path
                d="M38.3066 33C38.3066 33 43.977 40.5 53.4276 40.5C62.8782 40.5 68.5486 33 68.5486 33"
                stroke="url(#paint0_linear)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="64.5357"
                  y1="34.8056"
                  x2="43.3643"
                  y2="37.2545"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7457" />
                  <stop offset="1" stopColor="#FF8165" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <h1 className="title">França</h1>
              <span className="subline" />
            </div>
            <div className="subtitle">
              <p>
                Conheça sobre um dos locais mais
                <br /> procurado do mundo, deixe que nosso
                <br /> assistente virtual te ajude nessa jornada!
              </p>
            </div>
            <div className="play-video">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <circle
                    cx="24"
                    cy="20"
                    r="19.5"
                    stroke="url(#paint0_linear)"
                  />
                </g>
                <path
                  d="M21 14L30.3333 20L21 26V14Z"
                  fill="url(#paint1_linear)"
                  stroke="url(#paint2_linear)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="36.1458"
                    y1="5.07143"
                    x2="12.2684"
                    y2="28.7263"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F95E3F" />
                    <stop offset="1" stopColor="#FF7457" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="28.5007"
                    y1="15.5214"
                    x2="21.5738"
                    y2="20.8588"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F95E3F" />
                    <stop offset="1" stopColor="#FF7457" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="28.5007"
                    y1="15.5214"
                    x2="21.5738"
                    y2="20.8588"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F95E3F" />
                    <stop offset="1" stopColor="#FF7457" />
                  </linearGradient>
                </defs>
              </svg>
              Assista agora
            </div>
          </div>

          <div className="wrapper-rigth">
            <ButtonPrimary onClick={handleCallChat} type="button">
              Planejar minha viagem para a França
            </ButtonPrimary>
          </div>
        </div>
      </Container>
      <Assistant />
    </>
  );
};

export { Home };