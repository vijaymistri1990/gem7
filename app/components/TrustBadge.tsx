export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-6">
      <div className="flex items-center gap-2 text-slate-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="font-semibold text-sm">Secure Download</span>
      </div>
      <div className="flex items-center gap-2 text-slate-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <span className="font-semibold text-sm">Virus Scanned</span>
      </div>
      <div className="flex items-center gap-2 text-slate-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span className="font-semibold text-sm">1M+ Downloads</span>
      </div>
    </div>
  );
}

export function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://share-rxapq9cajg.gems7.org/web/share/index.html?ic=AA0AYTAM" className="flex items-center justify-center gap-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 w-full sm:w-auto">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.604 11.048a5.67 5.67 0 0 0-2.751-4.767c-.201-.115-.418-.21-.647-.282V4.5A1.5 1.5 0 0 0 11.706 3h-.412A1.5 1.5 0 0 0 9.794 4.5v1.5c-.23.072-.446.167-.647.282a5.67 5.67 0 0 0-2.751 4.767C6.012 12.35 6 13.921 6 15.5H4.5a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5H18c0-1.579-.012-3.15-.396-4.452zM12 21.5a2.5 2.5 0 0 1-2.5-2.5h5a2.5 2.5 0 0 1-2.5 2.5z"/>
        </svg>
        <div className="text-left">
          <div className="text-xs font-medium opacity-80">Download the Official</div>
          <div className="text-lg leading-tight">GEM7 APK</div>
        </div>
      </a>
      {/* Google Play Placeholder - Assuming it's an APK mostly, but following the 'Google Play Store button if available' constraint */}
      <a href="https://share-rxapq9cajg.gems7.org/web/share/index.html?ic=AA0AYTAM" className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-slate-900/20 w-full sm:w-auto">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.518 1.488C2.186 1.83 2 2.378 2 3.125v17.75c0 .747.186 1.295.518 1.637l.07.062 9.946-9.946v-.256L2.588 1.426l-.07.062zm10.74 10.74L16.5 15.47l4.137-2.355c1.18-.67 1.18-1.77 0-2.44L16.5 8.32l-3.242 3.243v.665zM3.465 22.316l9.317-9.317 3.251 3.251-12.568 7.158c-.443.253-.941.282-1.353.072l1.353-1.164zM3.465 1.684l1.353-1.164c.412-.21.91-.18 1.353.072L18.736 7.75l-3.251 3.251L3.465 1.684z"/>
        </svg>
        <div className="text-left">
          <div className="text-xs font-medium opacity-80">GET IT ON</div>
          <div className="text-lg leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  );
}

export function VerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[var(--color-primary)] px-3 py-1 rounded-full border border-blue-100 font-medium text-sm">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Verified Partner
    </div>
  );
}
