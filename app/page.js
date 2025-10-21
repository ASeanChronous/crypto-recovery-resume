'use client';

import React, { useState } from 'react';
import { Wallet, Shield, Key, Lock, ChevronDown, ChevronUp } from 'lucide-react';

export default function CryptoRecoveryResume() {
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    technical: true,
    business: true,
    services: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <Wallet className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Sean Perkins</h1>
              <p className="text-xl text-blue-100">Founder & Chief Recovery Officer</p>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-4 mt-4">
            <h2 className="text-2xl font-semibold mb-2">MCMLXXXI MEDIA CO. - Crypto Asset Recovery Services</h2>
            <p className="text-blue-100">Specialized blockchain forensics and wallet recovery solutions</p>
          </div>
          <div className="flex flex-wrap gap-6 mt-4 text-sm">
            <span>📧 sean@webrandu.today</span>
            <span>📱 305-204-6961</span>
            <span>🌐 www.webrandu.today</span>
            <span>💼 www.linkedin.com/in/sean-perkins-6aa7496/</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-8 border-b">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed">
            Cryptography and blockchain security specialist with expertise in digital asset recovery, 
            forensic analysis, and secure key management protocols. Founded MCMLXXXI MEDIA CO. to provide 
            ethical, transparent wallet recovery services leveraging advanced cryptographic techniques 
            and blockchain forensics. Committed to helping individuals and institutions recover lost 
            digital assets while maintaining the highest standards of security and client confidentiality.
          </p>
        </div>

        {/* Core Technical Competencies */}
        <div className="p-8 border-b">
          <button 
            onClick={() => toggleSection('technical')}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Key className="w-6 h-6 text-blue-600" />
              Core Technical Competencies
            </h3>
            {expandedSections.technical ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.technical && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-blue-700 mb-3">Cryptographic Recovery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• BIP39/BIP44 seed phrase reconstruction and validation</li>
                  <li>• Partial mnemonic recovery algorithms</li>
                  <li>• Private key derivation path analysis</li>
                  <li>• Custom password cracking and brute-force optimization</li>
                  <li>• Hierarchical deterministic (HD) wallet recovery</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-blue-700 mb-3">Blockchain Expertise</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bitcoin, Ethereum, and multi-chain wallet architectures</li>
                  <li>• On-chain forensics and transaction tracing</li>
                  <li>• Smart contract interaction and analysis</li>
                  <li>• Hardware wallet (Ledger, Trezor) recovery procedures</li>
                  <li>• Legacy wallet format migrations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-blue-700 mb-3">Security & Tools</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Air-gapped computing environments</li>
                  <li>• Encrypted data handling and secure key storage</li>
                  <li>• Custom recovery software development (Python, Rust, C++)</li>
                  <li>• Database and file system forensics</li>
                  <li>• Zero-knowledge proof implementations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-blue-700 mb-3">Data Recovery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Corrupted wallet file repair and reconstruction</li>
                  <li>• Hard drive and SSD data recovery</li>
                  <li>• Mobile device extraction (iOS/Android)</li>
                  <li>• Cloud backup retrieval and analysis</li>
                  <li>• Memory dump analysis for key extraction</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Business & Professional Skills */}
        <div className="p-8 border-b">
          <button 
            onClick={() => toggleSection('business')}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Business & Professional Skills
            </h3>
            {expandedSections.business ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.business && (
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Client Relations</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Sensitive situation management</li>
                  <li>• Expectation setting and transparency</li>
                  <li>• Technical explanation for non-technical clients</li>
                  <li>• Crisis communication</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Legal & Compliance</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Digital asset custody regulations</li>
                  <li>• Privacy and data protection (GDPR, etc.)</li>
                  <li>• Contract negotiation and risk management</li>
                  <li>• Insurance and liability frameworks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Business Operations</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Project scoping and feasibility analysis</li>
                  <li>• Service pricing and revenue models</li>
                  <li>• Quality assurance protocols</li>
                  <li>• Case documentation and reporting</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Service Offerings */}
        <div className="p-8 border-b bg-gray-50">
          <button 
            onClick={() => toggleSection('services')}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Lock className="w-6 h-6 text-blue-600" />
              Service Offerings & Capabilities
            </h3>
            {expandedSections.services ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.services && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold text-lg text-blue-700 mb-3">Tier 1: Self-Service Recovery Tools</h4>
                <p className="text-gray-700 mb-3">
                  Automated software solutions for common recovery scenarios with guided workflows
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li>✓ Password recovery for common wallet types</li>
                  <li>✓ Partial seed phrase completion (known word positions)</li>
                  <li>✓ Wallet file format conversion</li>
                  <li>✓ Basic blockchain scanning tools</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold text-lg text-blue-700 mb-3">Tier 2: Assisted Recovery Services</h4>
                <p className="text-gray-700 mb-3">
                  Expert-guided recovery for complex cases requiring specialized knowledge
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li>✓ Custom password attack strategies</li>
                  <li>✓ Hardware wallet recovery consultation</li>
                  <li>✓ Corrupted file forensics and repair</li>
                  <li>✓ Multi-signature wallet recovery coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold text-lg text-blue-700 mb-3">Tier 3: White-Glove Recovery</h4>
                <p className="text-gray-700 mb-3">
                  Full-service recovery for high-value wallets with comprehensive forensic analysis
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li>✓ Physical device recovery (damaged hardware)</li>
                  <li>✓ Advanced cryptographic analysis</li>
                  <li>✓ On-site secure recovery procedures</li>
                  <li>✓ Legal documentation and chain of custody</li>
                  <li>✓ Post-recovery security consultation</li>
                  <li>✓ Institutional-grade service agreements</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Professional Experience Template */}
        <div className="p-8 border-b">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Experience</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-lg">MCMLXXXI MEDIA CO.</h4>
                  <p className="text-blue-600 font-semibold">Founder & Chief Recovery Officer</p>
                </div>
                <span className="text-gray-600">2019 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Established comprehensive crypto wallet recovery service serving over 75 clients with 75% success rate on recoverable cases</li>
                <li>• Developed proprietary recovery algorithms reducing average case resolution time by 25%</li>
                <li>• Built secure infrastructure with air-gapped systems and encrypted client data protocols</li>
                <li>• Created educational resources helping individuals prevent wallet loss scenarios</li>
                <li>• Implemented contingency-based fee structure ensuring client alignment and risk sharing</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-bold text-lg mb-2">Additional Blockchain Development Experience</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Web3 Arbitrage Algorithm Development - Created automated trading systems leveraging cross-exchange price differentials and on-chain opportunities</li>
                <li>• Smart Contract Automation Algorithm Development - Designed and implemented automated smart contract interaction protocols for DeFi optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="p-8 border-b">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Education & Certifications</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold text-gray-700 mb-2">Bachelor of Science in Information Technology with focus on Cybersecurity - Florida Technical College</p>
              <p className="text-sm text-gray-600">2024 | Cum Laude</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Relevant Certifications:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                <li>□ Certified Blockchain Security Professional (CBSP)</li>
                <li>□ Certified Information Systems Security Professional (CISSP)</li>
                <li>□ Certified Ethical Hacker (CEH)</li>
                <li>□ Certified Bitcoin Professional (CBP)</li>
                <li>□ GIAC Reverse Engineering Malware (GREM)</li>
                <li>□ EnCase Certified Examiner (EnCE)</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2 italic">
                [Check boxes for certifications you have or plan to obtain]
              </p>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Differentiators</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">✓ Transparent Operations</h4>
              <p className="text-sm text-gray-600">Clear communication about success probability, realistic timelines, and detailed case assessment</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">✓ Security-First Approach</h4>
              <p className="text-sm text-gray-600">Air-gapped systems, encrypted communications, and never requesting direct seed phrase disclosure</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">✓ Success-Based Pricing</h4>
              <p className="text-sm text-gray-600">Contingency fee model aligns incentives with client outcomes (typically 15-20% of recovered assets)</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">✓ Comprehensive Insurance</h4>
              <p className="text-sm text-gray-600">Professional liability coverage and bonded operations for client asset protection</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white p-6 text-center">
          <p className="text-sm mb-2">
            Available for client consultations, partnership opportunities, and industry speaking engagements
          </p>
          <p className="text-xs text-gray-400">
            All recovery services conducted with strict adherence to legal and ethical standards
          </p>
        </div>
        
      </div>
    </div>
  );
}