import { useMediaQuery } from "@uidotdev/usehooks";

export default function useMediaQueryHook({
  zeroBP = 545,
  firstBP = 640,
  secondBP = 768,
  thirdBP = 992,
  fourBP = 1314,
  fiveBP = 1820,
}: {
  zeroBP?: number;
  firstBP?: number;
  secondBP?: number;
  thirdBP?: number;
  fourBP?: number;
  fiveBP?: number;
}) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 544px)");

  const isSemiSmallDevice = useMediaQuery(
    `only screen and (min-width : ${zeroBP}) and (max-width : ${firstBP}px)`,
  );
  const isSemiMediumDevice = useMediaQuery(
    `only screen and (min-width : ${firstBP + 1}px) and (max-width : ${secondBP}px)`,
  );
  const isMediumDevice = useMediaQuery(
    `only screen and (min-width : ${secondBP + 1}px) and (max-width : ${thirdBP}px)`,
  );
  const isLargeDevice = useMediaQuery(
    `only screen and (min-width : ${thirdBP + 1}px) and (max-width : ${fourBP}px)`,
  );
  const isExtraLargeDevice = useMediaQuery(
    `only screen and (min-width : ${fourBP + 1}px) and (max-width : ${fiveBP}px)`,
  );

  return {
    isSmallDevice,
    isSemiSmallDevice,
    isSemiMediumDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  };
}
