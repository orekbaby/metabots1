export function filterMemeTokens(tokens: any[], params: any): any {
    return tokens.filter((token) => {
      // Filter by liquidity provider burned
      if (params?.liquidityProviderBurned !== false) {
        const lpBurned = token?.pools?.some((pool: any) => pool?.lpBurn > 0);
        if (params?.liquidityProviderBurned !== lpBurned) return false;
      }
  
      // Filter by social media account
      if (params?.withSocialMediaAccount !== false) {
        const hasSocialMedia = token?.risk?.risks?.some(
          (risk: any) => risk?.name === "No social media"
        );
        if (params?.withSocialMediaAccount === hasSocialMedia) return false;
  
        if (
          !token?.token?.twitter &&
          !token?.token?.telegram &&
          !token?.token?.website
        )
          return false;
      }
  
      // Filter by top 10 holders percentage
      if (params?.top10holdersPercentage !== false) {
        const hasTop10HolderPercentageRisk = token?.risk?.risks?.some(
          (risk: any) => risk.name === "Top 10 Holders"
        );
        if (params?.top10holdersPercentage === hasTop10HolderPercentageRisk)
          return false;
      }
  
      // Filter by liquidity
      if (params?.liquidity) {
        const liquidityUsd = token?.pools?.reduce(
          (total: number, pool: any) => total + pool?.liquidity?.usd,
          0
        );
        if (
          liquidityUsd < Number(params?.liquidity?.min) ||
          liquidityUsd > Number(params?.liquidity?.max)
        )
          return false;
      }
  
      // Filter by volume
      if (params?.volume) {
        const volume = token?.pools?.reduce(
          (total: number, pool: any) => total + pool?.txns?.volume,
          0
        );
        if (volume < params?.volume?.min || volume > params?.volume?.max)
          return false;
      }
  
      // Filter by market cap
      if (params?.marketCap) {
        const marketCapUsd = token?.pools?.reduce(
          (total: number, pool: any) => total + pool?.marketCap?.usd,
          0
        );
        if (
          marketCapUsd < Number(params?.marketCap?.min) ||
          marketCapUsd > params?.marketCap?.max
        )
          return false;
      }
  
      // Filter by transactions
      if (params?.transactions) {
        const transactions = token?.pools?.reduce(
          (total: number, pool: any) => total + pool?.txns?.total,
          0
        );
        if (
          transactions < Number(params?.transactions?.min) ||
          transactions > Number(params?.transactions?.max)
        )
          return false;
      }
  
      // Filter by buys
      if (params?.buys) {
        const buys = token?.pools?.reduce(
          (total: number, pool: any) => total + pool?.txns?.buys,
          0
        );
        if (buys < Number(params?.buys?.min) || buys > Number(params?.buys?.max))
          return false;
      }
  
      // Filter by sells
      if (params?.sells) {
        const sells = token?.pools?.reduce(
          (total: number, pool: any) => total + pool?.txns?.sells,
          0
        );
        if (
          sells < Number(params?.sells?.min) ||
          sells > Number(params?.sells?.max)
        )
          return false;
      }
  
      return true;
    });
  }
  
  export function filterMemeToken(token: any, params: any): boolean {
    // Check if liquidity provider burned matches the parameter
    if (params?.liquidityProviderBurned !== false) {
      const lpBurned = token?.pools?.some((pool: any) => pool?.lpBurn > 0);
      if (params?.liquidityProviderBurned !== lpBurned) return false;
    }
  
    // Check if the presence of social media account matches the parameter
    if (params?.withSocialMediaAccount !== false) {
      const hasSocialMedia = token?.risk?.risks?.some(
        (risk: any) => risk.name === "No social media"
      );
      if (params?.withSocialMediaAccount === hasSocialMedia) return false;
  
      if (
        !token?.token?.twitter &&
        !token?.token?.telegram &&
        !token?.token?.website
      )
        return false;
    }
  
    // Check if top 10 holders percentage matches the parameter
    if (params?.top10holdersPercentage !== false) {
      const hasTop10HolderPercentageRisk = token?.risk?.risks?.some(
        (risk: any) => risk.name === "Top 10 Holders"
      );
      if (params?.top10holdersPercentage === hasTop10HolderPercentageRisk)
        return false;
    }
  
    // Check if liquidity falls within the specified range
    if (params?.liquidity) {
      const liquidityUsd = token?.pools?.reduce(
        (total: number, pool: any) => total + pool?.liquidity?.usd,
        0
      );
      if (
        liquidityUsd < Number(params?.liquidity?.min) ||
        liquidityUsd > Number(params?.liquidity?.max)
      ) {
        return false;
      }
    }
  
    // Check if volume falls within the specified range
    if (params?.volume) {
      const volume = token?.pools?.reduce(
        (total: number, pool: any) => total + pool?.txns?.volume,
        0
      );
      if (
        volume < Number(params?.volume?.min) ||
        volume > Number(params?.volume?.max)
      ) {
        return false;
      }
    }
  
    // Check if market cap falls within the specified range
    if (params?.marketCap) {
      const marketCapUsd = token?.pools?.reduce(
        (total: number, pool: any) => total + pool?.marketCap?.usd,
        0
      );
      if (
        marketCapUsd < Number(params?.marketCap?.min) ||
        marketCapUsd > Number(params?.marketCap?.max)
      ) {
        return false;
      }
    }
  
    // Check if transactions fall within the specified range
    if (params?.transactions) {
      const transactions = token?.pools?.reduce(
        (total: number, pool: any) => total + pool?.txns?.total,
        0
      );
      if (
        transactions < Number(params?.transactions?.min) ||
        transactions > Number(params?.transactions?.max)
      ) {
        return false;
      }
    }
  
    // Check if buys fall within the specified range
    if (params.buys) {
      const buys = token?.pools?.reduce(
        (total: number, pool: any) => total + pool?.txns?.buys,
        0
      );
      if (buys < Number(params?.buys?.min) || buys > Number(params?.buys?.max)) {
        return false;
      }
    }
  
    // Check if sells fall within the specified range
    if (params.sells) {
      const sells = token?.pools?.reduce(
        (total: number, pool: any) => total + pool?.txns?.sells,
        0
      );
      if (
        sells < Number(params?.sells?.min) ||
        sells > Number(params?.sells?.max)
      ) {
        return false;
      }
    }
  
    // If all checks pass, return true
    return true;
  }